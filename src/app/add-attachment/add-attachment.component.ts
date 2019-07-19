import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploadService} from '../services/file-upload.service';
import {APIService} from '../API.service';

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss']
})
export class AddAttachmentComponent implements OnInit {

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

  constructor(private fileUploadService: FileUploadService,
              private api: APIService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  public save() {
    if (!this.description || this.selectedFiles === null || this.selectedFiles.length === 0) {
      return;
    }
    const file = this.selectedFiles.item(0);
    this.fileUploadService.uploadFile(file, this.targetFolder, (data) => this.createRecord(data));

  }

  private createRecord(data) {
    const input = {
      id: '',
      description: this.description,
      url: data.Location,
      viqRecordingAttachmentViqRecordingId: this.recordingId
    };
    this.api.CreateViqRecordingAttachment(input).then(r => {
      this.saved.emit({});
    });

  }

  public cancel() {
    this.cancelled.emit({});
  }
}

