import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.component.html',
  styleUrls: ['./recording-list.component.scss']
})
export class RecordingListComponent implements OnInit {
  recordingList: any = [];
  attachments: any = [];


  constructor(private api: APIService) {
  }

  async ngOnInit() {
    await this.listRecording();
  }

  async listRecording() {
    let result = await this.api.ListViqRecordings();
    this.recordingList = result.items;

    this.attachments = this.recordingList[0].attachments;
  }

}
