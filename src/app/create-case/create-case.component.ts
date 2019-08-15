import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FileUpload} from 'primeng/primeng';
import {APIService} from '../API.service';
import {Router} from '@angular/router';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {EventBusService} from '../services/event-bus-service';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.scss']
})
export class CreateCaseComponent implements OnInit, OnDestroy {

  public model: any = {
    interviewStart: '2019-01-01 13:10:00',
    interviewFinish: '2019-01-01 15:20:10',
    interviewee: 'someone',
    officerCollarNumber: '1234',
    location: 'central station',
    unitId: '123',
    path: 'kklkkl',
  };
  public isRunning = false;
  selectedFiles: FileList;
  public mandatoryFieldError = false;
  public selectFilesError = false;

  @ViewChild('fileUpload', {static: false})
  public fileUploadComponent: FileUpload;

  private currentUser: any;
  private subs: Subscription[] = [];

  constructor(private api: APIService,
              private router: Router,
              private eventBus: EventBusService,
              private dateTimeHelper: DatetimeHelperService) {
  }

  ngOnInit() {
    this.subs.push(this.eventBus.currentUser.subscribe(u => {
      this.currentUser = u;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  myUploader(event) {
    // event.files == files to upload
  }

  private validatInput() {
    this.mandatoryFieldError = false;
    this.selectFilesError = false;
    if (!this.nn(this.model.interviewee)) {
      this.mandatoryFieldError = true;
    }
    if (!this.nn(this.model.interviewStart)) {
      this.mandatoryFieldError = true;
    }
    if (!this.nn(this.model.interviewFinish)) {
      this.mandatoryFieldError = true;
    }
    if (!this.nn(this.model.officerCollarNumber)) {
      this.mandatoryFieldError = true;
    }
    if (!this.nn(this.model.location)) {
      this.mandatoryFieldError = true;
    }
    // if (!this.fileUploadComponent.files || this.fileUploadComponent.files.length <= 0) {
    //   this.selectFilesError = true;
    // }
    return this.selectFilesError || this.mandatoryFieldError;
  }

  private nn(v) {
    return v !== null && v !== undefined;
  }

  public create() {
    if (this.validatInput()) {
      return;
    }
    this.api.CreateCase(this.model).then((r: any) => {
      const caseId = r.id;
      const dt = this.dateTimeHelper.format(new Date());
      this.api.CreateLog({
        dateTime: dt,
        description: 'Case created: ' + JSON.stringify(this.model),
        userName: this.currentUser.username,
        recordId: 'unknown',
        tableName: 'Case',
        logCaseId: caseId,
      }).then(res => {

      });
      this.router.navigate(['upload-media', caseId]);
    }, err => {
      console.log(err);
    });
  }
}
