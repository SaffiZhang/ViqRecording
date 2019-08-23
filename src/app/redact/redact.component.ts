import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';
import {APIService, ModelRedactionFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {EventBusService} from '../services/event-bus-service';
import {Subscription} from 'rxjs';
import {RedactionStatus} from './redaction-status.enum';
import {RedactionEditingComponent} from './redaction-editing/redaction-editing.component';
import {ConfirmationService} from 'primeng/api';
import {RedactionEventBus} from './redaction-event-bus';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.scss']
})
export class RedactComponent implements OnInit, OnDestroy {

  public recordingId: string;
  public caseId: string;
  public sources: any[];

  public redactions: any[];
  public data: any;

  public allowAddNew = false;

  public startTime: any;
  public endTime: any;

  public description;

  @ViewChild('player', {static: false})
  public player: VideoPlayerComponent;

  @ViewChild('redactionEditor', {static: false})
  public editor: RedactionEditingComponent;

  public redactTypeOptions = [{
    label: 'Video',
    value: 'video'
  }, {
    label: 'Audio',
    value: 'audio'
  }];

  public redactType = 'video';
  private currentUser: any;

  public showGotoIntervalButton = true;

  private subs: Subscription[] = [];

  constructor(private router: Router,
              private dateHelper: DatetimeHelperService,
              private eventBus: EventBusService,
              private historyEventBus: RedactionEventBus,
              private confirmationService: ConfirmationService,
              private api: APIService) {
    this.data = this.router.getCurrentNavigation().extras.state;
    console.log('data', this.data);
  }

  ngOnInit() {

    if (!this.data) {
      this.router.navigate(['recording-list']);
      return;
    }
    console.log(this.data);
    this.recordingId = this.data.recordingId;
    this.caseId = this.data.caseId;
    this.sources = [this.data.source];
    this.refresh();

    this.subs.push(this.eventBus.currentUser.subscribe(u => {
      this.currentUser = u;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => {
      x.unsubscribe();
    });
  }

  public getStartTime() {
    const time = this.player.getTime();
    this.startTime = Math.round(time.current / 1000);
  }

  public getEndTime() {
    const time = this.player.getTime();
    this.endTime = Math.round(time.current / 1000);
  }

  public canAddNew() {
    let result = true;
    result = result && (this.startTime !== undefined && this.startTime !== null);
    result = result && (this.endTime !== undefined && this.endTime !== null);
    result = result && (this.redactType !== undefined && this.redactType !== null);
    return result;
  }

  public addNew() {
    const input = {
      id: '',
      redactionVersion: new Date(this.currentRedactionItem.redactionVersion).toISOString(),
      startSecond: this.startTime,
      endSecond: this.endTime,
      type: this.redactType,
      redactionIntervalRedactionId: this.currentRedactionItem.id,
    };

    const self = this;
    this.api.CreateRedactionInterval(input).then(result => {
      this.refreshIntervalList();
      this.startTime = undefined;
      this.endTime = undefined;
      this.redactType = 'video';

      const dt = this.dateHelper.format(new Date());
      // this.api.CreateLog({
      //   id: '',
      //   dateTime: dt,
      //   description: 'Redaction added:' + JSON.stringify(input),
      //   userName: '',
      //   recordId: '',
      //   tableName: '',
      //   logCaseId: this.recordingId
      // });
    });
  }

  private refresh() {
    const filter = {
      redactionRecordingId: {eq: this.recordingId},
      // and: [{
      //   status: {eq: RedactionStatus.InProgress},
      //   or: [{
      //     status: {eq: RedactionStatus.Submitted}
      //   }]
      // }]
    };

    this.api.ListRedactions(filter).then(redactions => {
    debugger;
      const items = redactions.items.filter(x =>  x.status === RedactionStatus.Submitted);
      // this.allowAddNew = redactions.items.length === 0;
      this.allowAddNew = items.length === 0;
    });
  }


  public getVersion(d) {
    return this.dateHelper.format(new Date(+d));
  }

  public finish() {
    const input = {
      id: this.currentRedactionItem.id,
      status: RedactionStatus.Submitted,
      updatedDateTime: (new Date()).toISOString(),
      updatedBy: this.currentUser.username,
    };
    this.api.UpdateRedaction(input).then(r => {
      this.historyEventBus.notifyHistoryChanged();
      this.backToHistory();
    });
  }

  public back() {
    this.router.navigate(['/recording-details', this.caseId]);
  }

  public addNewRedaction() {
    this.showGotoIntervalButton = true;
    this.editor.edit(null, (item) => {
      this.editInterval(item);
    });
  }

  public editRedaction(item) {
    this.showGotoIntervalButton = false;
    this.editor.edit(item, null);
  }

  public editingInterval = false;
  public currentRedactionItem: any;
  public intervals: any[];

  public readonly = false;

  private editInterval(item) {
    this.currentRedactionItem = item;
    this.editingInterval = true;
    this.readonly = 
      item.status === RedactionStatus.Completed ||
      item.status === RedactionStatus.Submitted;
    this.refreshIntervalList();
  }

  private refreshIntervalList() {
    const filter = {
      redactionIntervalRedactionId: {eq: this.currentRedactionItem.id}
    };
    this.api.ListRedactionIntervals(filter).then(i => {
      this.intervals = i.items;
    });
  }

  public backToHistory() {
    this.editingInterval = false;
  }

  public deleteInterval(item) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove this interval?',
      key: 'delete-interval',
      accept: () => {
        this.deleteIntervalIpl(item);
      }
    });
  }

  private deleteIntervalIpl(item) {
    const input = {
      id: item.id
    };
    this.api.DeleteRedactionInterval(input).then(r => {
      this.refreshIntervalList();
    });
  }
}
