import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {APIService} from '../../API.service';
import {RedactionStatus} from '../redaction-status.enum';
import {ConfirmationService} from 'primeng/api';
import {RedactionEventBus} from '../redaction-event-bus';
import {Subscription} from 'rxjs';
import {DatetimeHelperService} from '../../services/datetime-helper.service';

@Component({
  selector: 'app-redaction-history',
  templateUrl: './redaction-history.component.html',
  styleUrls: ['./redaction-history.component.scss']
})
export class RedactionHistoryComponent implements OnInit, OnDestroy {

  @Input('recording-id')
  public set setRecordingId(value: string) {
    this.recordingId = value;
    this.refresh(this.recordingId);
  }

  @Output('edit-redaction')
  public editRedaction: EventEmitter<any> = new EventEmitter<any>();

  @Output('show-intervals')
  public showIntervalHistory: EventEmitter<any> = new EventEmitter<any>();

  private recordingId;

  public items: any[];

  private subs: Subscription[] = [];

  constructor(private api: APIService,
              private historyEventBus: RedactionEventBus,
              private confirmationService: ConfirmationService,
              private dateHelper: DatetimeHelperService) {
  }

  ngOnInit() {
    this.subs.push(this.historyEventBus.redactionHistoryChanged.subscribe(r => {
      this.refresh(this.recordingId);
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  public refresh(recordingId) {
    const filter = {
      redactionRecordingId: {eq: recordingId}
    };
    this.api.ListRedactions(filter, 1000).then(r => {
      this.items = r.items;
      r.items.forEach(x => {
        x.redactionVersion = this.dateHelper.format(new Date(x.redactionVersion));
        x.updatedDateTime = this.dateHelper.format(new Date(x.updatedDateTime));
      });
    });
  }

  public canChange(status: RedactionStatus) {
    return status === RedactionStatus.InSetting;
  }

  public deleteItem(item) {
    if (item) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to delete selected pending redaction?',
        key: 'remove-redaction',
        accept: () => {
          setTimeout(() => {
            this.deleteItemImpl(item);
          }, 0);
        }
      });
    }
  }

  private deleteItemImpl(item) {
    this.api.DeleteRedaction({id: item.id}).then(r => {
      this.refresh(this.recordingId);
    });
  }

  private cloneItem(item) {
    const newItem = JSON.parse(JSON.stringify(item));
    delete newItem['__typename'];
    delete newItem['RedactionIntervals'];
    delete newItem['recording'];
    return newItem;
  }

  public editItem(item) {
    const newItem = this.cloneItem(item);
    this.editRedaction.emit(newItem);
  }

  public editIntervals(item) {
    const newItem = this.cloneItem(item);
    this.showIntervalHistory.emit(newItem);
  }
}
