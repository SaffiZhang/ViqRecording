import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.component.html',
  styleUrls: ['./recording-list.component.scss']
})
export class RecordingListComponent implements OnInit {
  public recordingList: any = [];
  public columns = [{
    field: 'id', header: 'Id', filterMatchMode: 'startsWith'
  }, {
    field: 'interviewStart', header: 'Start Time', filterMatchMode: 'startsWith'
  }, {
    field: 'interviewFinish', header: 'Finish Time', filterMatchMode: 'startsWith'
  }, {
    field: 'unitId', header: 'Police Station Id', filterMatchMode: 'startsWith'
  }, {
    field: 'officerCollarNumber', header: 'Officer', filterMatchMode: 'startsWith'
  }, {
    field: 'interviewee', header: 'Interviewee', filterMatchMode: 'startsWith'
  }];

  constructor(private api: APIService) {
  }

  async ngOnInit() {
    await this.listRecording();
  }

  async listRecording() {
    const result = await this.api.ListViqRecordings();
    this.recordingList = result.items;

  }

}
