import {Component, Input, OnInit} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnInit {

  @Input('recording-id')
  public recordingId;

  @Input()
  public attachments: any[];

  constructor(private api: APIService) {
  }

  ngOnInit() {
  }

  public refresh() {
    console.log('refresh triggered');
    console.log(this.recordingId);
    console.log(this.attachments);
    this.api.GetViqRecordingAttachment(this.recordingId).then(r => {
      // this.attachments = <any[]>r;
      console.log(r);
    });
  }
}
