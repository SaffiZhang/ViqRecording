import {Component, Input, OnInit} from '@angular/core';
import {APIService, ModelLogFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
  @Input('logs')
  public set setLogs(v: any[]) {
    v.forEach(p => {
      p.dateTime = this.dateTimeHelper.format(new Date(p.dateTime));
    });
    this.logs = v;
  }

  public logs: any[];


  @Input('recording-id')
  public recordingId;

  constructor(private api: APIService, private dateTimeHelper: DatetimeHelperService) {
  }

  ngOnInit() {
  }

  public refresh() {
    const filter: ModelLogFilterInput = {logCaseId: {eq: this.recordingId}};
    // the number is how many records will be in the output
    this.api.ListLogs(filter, 100).then(r => {
      console.log(r);
      r.items.forEach(p => {
        p.dateTime = this.dateTimeHelper.format(new Date(p.dateTime));
      })
      this.logs = r.items;
    });
  }
}
