import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {APIService} from '../API.service';
import {EventBusService} from '../services/event-bus-service';
import {Subscription} from 'rxjs';
import {FileUpload, MessageService} from 'primeng/primeng';
import {FileUploadService} from '../services/file-upload.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-case-upload-media',
  templateUrl: './create-case-upload-media.component.html',
  styleUrls: ['./create-case-upload-media.component.scss']
})
export class CreateCaseUploadMediaComponent implements OnInit, OnDestroy {
  public model: any = {};
  public mediaModel: any = {
    camera: 'N/A',
  };

  private currentUser: any;
  private caseId: string;
  private subs: Subscription[] = [];
  @ViewChild('fileUpload', {static: false})
  public fileUploadComponent: FileUpload;

  @ViewChild('inputForm', {static: false})
  public form: NgForm;

  public mandatoryFieldError = false;
  public selectFilesError = false;

  public isRunning = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private api: APIService,
              private fileUploadService: FileUploadService,
              private eventBus: EventBusService,
              private dateTimeHelper: DatetimeHelperService) {
  }

  ngOnInit() {
    this.subs.push(this.route.paramMap.subscribe(p => {
      const caseId = p.get('id');
      if (caseId) {
        this.api.GetCase(caseId).then(d => {
          this.model = d;
          this.caseId = caseId;
        });
      } else {
        this.router.navigate(['/']);
      }
    }));
    this.subs.push(this.eventBus.currentUser.subscribe(u => {
      this.currentUser = u;
    }));
    this.mediaModel.version = this.dateTimeHelper.format(new Date());
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => {
      x.unsubscribe();
    });
  }

  myUploader(event) {
    // event.files == files to upload
  }

  private validateInput() {
    this.mandatoryFieldError = false;
    this.selectFilesError = false;
    if (!this.nn(this.mediaModel.version)) {
      this.mandatoryFieldError = true;
    }
    if (!this.nn(this.mediaModel.description)) {
      this.mandatoryFieldError = true;
    }

    if (!this.fileUploadComponent.files || this.fileUploadComponent.files.length <= 0) {
      this.selectFilesError = true;
    }
    return this.selectFilesError || this.mandatoryFieldError;
  }

  private nn(v) {
    return v !== null && v !== undefined;
  }

  public upload() {
    if (this.validateInput()) {
      this.messageService.add({
        key: 'import-case',
        severity: 'Error',
        summary: 'Mandatory Field',
        detail: 'Please fill all mandatory fields.'
      });
      return;
    }
    this.isRunning = true;
    this.fileUploadComponent.files.forEach((f, index) => {
      this.fileUploadService.uploadFile(f, this.getFilePath(), (data) => {
        this.createRecord(data, index);
      }, (err) => {
        console.log(err);
        this.isRunning = false;
      });
    });
  }

  private getFileName() {
    const dt = (new Date()).getTime().toString();
    return this.caseId + '-' + dt.substring(dt.length - 6);
  }

  private getFilePath() {
    const dt = new Date();
    const fn = this.getFileName();
    return `import/${this.currentUser.username}/${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}/${fn}`;
  }

  private createRecord(data, index) {
    console.log('create record', data);
    const payload = {
      url: data.Location,
      bucket: data.Bucket,
      key: data.Key,
      // lastmodified: this.mediaModel.lastmodified,
      description: this.mediaModel.description,
      camera: this.mediaModel.camera,
      version: this.mediaModel.version,
      recordingCaseId: this.caseId,
    };
    this.api.CreateRecording(payload).then(r => {
      console.log(r);
      const dt = this.dateTimeHelper.format(new Date());
      this.api.CreateLog({
        dateTime: dt,
        description: 'Recording created: ' + JSON.stringify(this.mediaModel),
        userName: this.currentUser.username,
        recordId: r.id,
        tableName: 'Recording',
        logCaseId: this.caseId,
      }).then(res => {

      });
    }, err => {
      this.isRunning = false;
      this.messageService.add({
        key: 'import-case',
        severity: 'Error',
        summary: 'Error',
        detail: 'Error occurred while importing the case. Please try it again later.'
      });
    });
    if (index === this.fileUploadComponent.files.length - 1) {
      this.isRunning = false;
      this.reset();
    }
  }

  private reset() {
    this.fileUploadComponent.clear();
    this.mediaModel = {};
    this.mediaModel.version = this.dateTimeHelper.format(new Date());
    this.messageService.add({
      severity: 'success',
      summary: 'Media Upload',
      detail: 'Media files uploaded successfully',
      key: 'upload-media'
    });
  }

  public cancel() {
    this.router.navigate(['/']);
  }
}
