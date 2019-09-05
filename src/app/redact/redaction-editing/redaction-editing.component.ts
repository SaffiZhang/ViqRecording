import {Component, Input, OnInit} from '@angular/core';
import {APIService} from '../../API.service';
import {RedactionEventBus} from '../redaction-event-bus';
import {DatetimeHelperService} from '../../services/datetime-helper.service';
import {EventBusService} from '../../services/event-bus-service';
import {Subscription} from 'rxjs';
import {RedactionStatus} from '../redaction-status.enum';

@Component({
  selector: 'app-redaction-editing',
  templateUrl: './redaction-editing.component.html',
  styleUrls: ['./redaction-editing.component.scss']
})
export class RedactionEditingComponent implements OnInit {

  @Input('recording-id')
  public recordingId;

  @Input('show-interval-button')
  public showIntervalButton = true;

  public model = {
    id: '',
    redactionVersion: '',
    description: '',
    updatedDateTime: '',
    updatedBy: '',
    status: '',
    redactionRecordingId: ''
  };

  public showModal = false;
  public isNew = false;

  public callback: any;

  private currentUser: any;

  private subs: Subscription[] = [];

  constructor(private api: APIService,
              private historyEventBus: RedactionEventBus,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.subs.push(this.eventBus.currentUser.subscribe(r => {
      this.currentUser = r;
    }));
  }

  public edit(item, cb) {
    this.callback = cb;
    this.isNew = !item;
    this.showModal = true;
    if (item) {
      this.model = item;
    } else {
      this.reset();
    }
  }

  public get isValid() {
    return !this.model.description;
  }

  private reset() {
    this.model = {
      id: '',
      redactionVersion: '',
      description: '',
      updatedDateTime: '',
      updatedBy: '',
      status: '',
      redactionRecordingId: this.recordingId
    };
  }

  public save(gotoInterval = false) {
    const dt = (new Date()).toISOString();
    if (this.isNew) {
      this.model.redactionRecordingId = this.recordingId;
      this.model.redactionVersion = dt;
      this.model.updatedDateTime = dt;
      this.model.updatedBy = this.currentUser.username;
      this.model.status = RedactionStatus.InSetting;
      this.api.CreateRedaction(this.model).then((r: any) => {

        this.historyEventBus.notifyHistoryChanged();
        if (gotoInterval && this.callback) {
          this.callback(r);
        }
        this.showModal = false;
      }).catch(err => {
        this.showModal = false;
      });
    } else {
      this.model.updatedDateTime = dt;
      this.model.updatedBy = this.currentUser.username;
      this.api.UpdateRedaction(this.model).then(r => {
        this.historyEventBus.notifyHistoryChanged();
        if (gotoInterval && this.callback) {
          this.callback(this.model);

        }
        this.showModal = false;
      }).catch(err => {
        this.showModal = false;
      });
    }

  }

  public cancel() {
    this.showModal = false;
    this.reset();
  }
}
