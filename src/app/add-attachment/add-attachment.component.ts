import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploadService} from '../services/file-upload.service';

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

  public description: string;

  selectedFiles: FileList;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  public save() {
    const file = this.selectedFiles.item(0);
    this.fileUploadService.uploadFile(file, this.targetFolder);
    this.saved.emit({});
  }

  public cancel() {
    this.cancelled.emit({});
  }
}
