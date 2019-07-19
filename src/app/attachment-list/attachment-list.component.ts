import {Component, Input, OnInit} from '@angular/core';
import {APIService, ModelViqRecordingAttachmentFilterInput} from '../API.service';

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
    const filter1: ModelViqRecordingAttachmentFilterInput = {viqRecordingAttachmentViqRecordingId: {eq: this.recordingId}};
    const attachments = this.api.ListViqRecordingAttachments(filter1, 200).then(r => {
      this.attachments = r.items;
    });
  }
}
