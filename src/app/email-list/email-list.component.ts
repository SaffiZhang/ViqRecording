import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {APIService, ModelViqRecordingSharedFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  @Input('recording-id')
  public set setRecordingId(value) {
    this.recordingId = value;
    this.refresh();
  }

  @Input('urls')
  public urls: any[];
  @Input('user-name')
  public userName;

  public receiverRoleOptions = [{
    label: 'Interviewee', value: 'Interviewee'
  }, {
    label: 'Legal Representive', value: 'Legal Representive'
  }];

  private recordingId;

  public recordingShares: any[];

  public receiverName;
  public receiverType;
  public receiverEmail;

  @ViewChild('receiverNameCtrl', {static: false})
  public receiverNameControl;
  @ViewChild('receiverTypeCtrl', {static: false})
  public receiverTypeControl;
  @ViewChild('emailCtrl', {static: false})
  public emailControl;

  constructor(private apiService: APIService,
              private messageService: MessageService,
              private dateTimeHelper: DatetimeHelperService) {
  }

  ngOnInit() {
    this.receiverType = this.receiverRoleOptions[0].value;
  }

  private refresh() {
    if (this.recordingId) {
      const filter5: ModelViqRecordingSharedFilterInput = {viqRecordingSharedViqRecordingId: {eq: this.recordingId}};
      this.apiService.ListViqRecordingShareds(filter5).then(r => {
        console.log('recording-share', r);
        r.items.forEach(x => {
          x.dateTime = this.dateTimeHelper.format(new Date(x.dateTime));
        });
        this.recordingShares = r.items;

      });

    }
  }

  public share() {

    let isValid = true;
    if (!this.receiverNameControl.valid) {
      isValid = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Receiver Name',
        detail: 'Field is mandatory',
        key: 'emailValidation'
      });
    }
    if (!this.receiverTypeControl.valid) {
      isValid = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Receiver Type',
        detail: 'Field is mandatory',
        key: 'emailValidation'
      });
    }
    if (!this.emailControl.valid) {
      isValid = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Email Address',
        detail: 'Field is mandatory and need be a valid email address',
        key: 'emailValidation'
      });
    }
    if (!isValid) {
      return;
    }
    const dt = this.dateTimeHelper.format(new Date());
    const input = {
      id: '',
      dateTime: dt,
      receiver: this.receiverName,
      receiver_email: this.receiverEmail,
      receiver_type: this.receiverType,
      token: (new Date()).getTime().toString(),
      urls: [],
      userName: this.userName,
      viqRecordingSharedViqRecordingId: this.recordingId
    };
    this.urls.forEach(x => {
      input.urls.push(x.url);
    });
    this.apiService.CreateViqRecordingShared(input).then(r => {
      this.apiService.CreateViqRecordingLog({
        id: '',
        dateTime: dt,
        description: 'Recording Shares added:' + JSON.stringify(input),
        viqRecordingLogViqRecordingId: this.recordingId
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Recording is shared',
        key: 'message'
      });
      this.receiverName = '';
      this.receiverEmail = '';
      this.receiverType = this.receiverRoleOptions[0].value;
      this.refresh();
    }, (err) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error occurred while share recording. Please try it later',
        key: 'message'
      });
    });
  }
}
