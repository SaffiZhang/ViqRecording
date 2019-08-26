import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FileUploadService} from '../services/file-upload.service';
import {APIService} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {EventBusService} from '../services/event-bus-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss']
})
export class AddAttachmentComponent implements OnInit, OnDestroy {

  @Output()
  public saved: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public cancelled: EventEmitter<any> = new EventEmitter<any>();

  @Input('target-folder')
  public targetFolder: string;

  @Input('recording-id')
  public recordingId;

  public description: string;

  selectedFiles: FileList;

  private subs: Subscription[] = [];
  private currentUser: any;

  constructor(private fileUploadService: FileUploadService,
              private dateTimeHepler: DatetimeHelperService,
              private eventBus: EventBusService,
              private api: APIService) {
  }

  ngOnInit() {
    this.subs.push(this.eventBus.currentUser.subscribe(r => {
      this.currentUser = r;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  public save() {
    if (!this.description || this.selectedFiles === null || this.selectedFiles.length === 0) {
      return;
    }
    const file = this.selectedFiles.item(0);
    const parts = file.name.split('.');
    this.fileUploadService.uploadFile(file, this.targetFolder + parts[0], (data) => this.createRecord(data, file.name));

  }

  private createRecord(data, fileName) {
    const dt = (new Date()).toISOString();
    const input = {
      id: '',
      description: this.description,
      url: data.Location,
      updatedDateTime: dt,
      updatedBy: this.currentUser ? this.currentUser.username : 'unknown',
      attachmentCaseId: this.recordingId
    };
    this.api.CreateAttachment(input).then(r => {
      this.api.CreateLog({
        id: '',
        dateTime: dt,
        userName: this.currentUser ? this.currentUser.username : 'unknown',
        recordId: this.recordingId,
        tableName: 'Attachement',
        description: 'Attachment added:' + JSON.stringify(data),
        logCaseId: this.recordingId
      });
      this.saved.emit({});
    });

  }

  public cancel() {
    this.cancelled.emit({});
  }
}

