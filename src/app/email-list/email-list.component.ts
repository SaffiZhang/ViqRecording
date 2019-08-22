import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {APIService, ModelSharedFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {MessageService} from 'primeng/api';
import {VideoPlayerComponent} from '../video-player/video-player.component';
import {AddPipe, FromUtcPipe} from 'ngx-moment';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
  providers: [FromUtcPipe, AddPipe]
})
export class EmailListComponent implements OnInit {
  @Input()
  public sources: any[];

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

  public recordingId;

  public recordingShares: any[];

  public receiverName;
  public receiverType;
  public receiverEmail;

  @ViewChild('receiverNameCtrl', {static: false})
  public receiverNameControl: NgModel;
  @ViewChild('receiverTypeCtrl', {static: false})
  public receiverTypeControl: NgModel;
  @ViewChild('emailCtrl', {static: false})
  public emailControl: NgModel;

  @ViewChild('player3', {static: false})
  public player3: VideoPlayerComponent;
  @ViewChild('player4', {static: false})
  public player4: VideoPlayerComponent;


  public expiryOption = [{
    label: '7 Days',
    value: 7
  }, {
    label: ' 14 Days',
    value: 14
  }, {
    label: '30 Days',
    value: 30
  }];

  public expiryInDays = 7;

  constructor(private apiService: APIService,
              private messageService: MessageService,
              private dateTimeHelper: DatetimeHelperService,
              private appPipe: AddPipe) {
  }

  ngOnInit() {
    this.receiverType = this.receiverRoleOptions[0].value;
  }

  private refresh() {
    if (this.recordingId) {
      const filter5: ModelSharedFilterInput = {sharedCaseId: {eq: this.recordingId}};
      this.apiService.ListShareds(filter5).then(r => {
        console.log('recording-share', r);
        r.items.forEach(x => {
          x.createdDateTime = this.dateTimeHelper.format(new Date(x.createdDateTime));
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
    const videoSource = [];
    if (this.sources && this.sources.length > 0) {
      let videoCheked = 0;

      if (this.player3) {
        if (this.player3.isChecked) {
          videoCheked += 1;
          videoSource.push(this.player3.selectedSource);
        }
      }
      if (this.player4) {
        if (this.player4.isChecked) {
          videoCheked += 1;
          videoSource.push(this.player4.selectedSource);
        }
      }
      if (videoCheked !== 1) {
        isValid = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Recording Selection',
          detail: 'Please select one recording.',
          key: 'emailValidation'
        });
      }
    }
    if (!isValid) {
      return;
    }
    const expiryDate = this.appPipe.transform(new Date(), this.expiryInDays, 'days');
    const dt = new Date().toISOString();
    let tokenStr = (new Date()).getTime().toString();
    tokenStr = tokenStr.substring(tokenStr.length - 6);
    const input = {
      id: '',
      createdDateTime: dt,
      createdBy: this.userName,
      receiver: this.receiverName,
      receiver_email: this.receiverEmail,
      receiver_type: this.receiverType,
      token: tokenStr,
      expiry_date: expiryDate.toISOString(),
      urls: [],
      description: 'recording id:' + videoSource[0].id,
      status: 'pending',
      sharedCaseId: this.recordingId
    };
    input.urls.push(videoSource[0].src);
    this.apiService.CreateShared(input).then(r => {
      this.apiService.CreateLog({
        id: '',
        dateTime: dt,
        description: 'Recording Shares added:' + JSON.stringify(input),
        userName: this.userName,
        recordId: videoSource[0].id,
        tableName: 'Recording Shared',
        logCaseId: this.recordingId
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Recording is shared',
        key: 'message'
      });
      this.receiverType = this.receiverRoleOptions[0].value;
      this.expiryInDays = 7;
      this.receiverNameControl.reset('');
      this.emailControl.reset('');
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
