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
    field: 'location', header: 'Police Station', filterMatchMode: 'startsWith'
  }, {
    field: 'officerCollarNumber', header: 'Officer', filterMatchMode: 'startsWith'
  }, {
    field: 'interviewee', header: 'Interviewee', filterMatchMode: 'startsWith'
  }];

  public searchModel = {};

  public rows = 10;
  public rowsOptions = [{
    label: '5',
    value: 5
  }, {
    label: '10',
    value: 10
  }, {
    label: '15',
    value: 15
  }, {
    label: '20',
    value: 20
  }, {
    label: '25',
    value: 25
  }, {
    label: '50',
    value: 50
  }];

  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.doSearch('');
  }

  public doSearch(field) {
    const f = {};
    let hasFilter = false;

    Object.keys(this.searchModel).forEach(k => {
      if (this.searchModel[k]) {
        f[k] = {contains: this.searchModel[k]};
        hasFilter = true;
      }
    });
    this.api.ListCases(hasFilter ? f : null, 1000).then(r => {
      this.recordingList = r.items;
    });
  }

  public undoSearch(field) {
    this.searchModel[field] = '';
    this.doSearch(field);
  }
}
