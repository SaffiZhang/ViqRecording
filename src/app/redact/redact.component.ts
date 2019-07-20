import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';
import {APIService, ModelViqRecordingRedactionFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.scss']
})
export class RedactComponent implements OnInit {

  public recordingId: string;
  public sources: any[];

  public redactions: any[];
  public data: any;


  public startTime: any;
  public endTime: any;

  @ViewChild('player', {static: false})
  public player: VideoPlayerComponent;

  public redactTypeOptions = [{
    label: 'Video',
    value: 'video'
  }, {
    label: 'Audio',
    value: 'audio'
  }];

  public redactType = 'video';

  constructor(private router: Router,
              private dateHelper: DatetimeHelperService,
              private api: APIService) {
    this.data = this.router.getCurrentNavigation().extras.state;
    console.log('data', this.data);
  }

  ngOnInit() {

    if (!this.data) {
      this.router.navigate(['recording-list']);
    }
    console.log(this.data);
    this.recordingId = this.data.recordingId;
    this.sources = [this.data.source];
    this.refresh();
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
      redactionVersion: (new Date()).getTime().toString(),
      startSecond: this.startTime,
      endSecond: this.endTime,
      type: this.redactType,
      viqRecordingRedactionViqRecordingUrlId: this.data.source.id
    };
    const self = this;
    this.api.CreateViqRecordingRedaction(input).then(result => {
      this.refresh();

      const dt = this.dateHelper.format(new Date());
      this.api.CreateViqRecordingLog({
        id: '',
        dateTime: dt,
        description: 'Redaction added:' + JSON.stringify(input),
        viqRecordingLogViqRecordingId: this.recordingId
      });
    });
  }

  private refresh() {
    const urlId = this.data.source.id;
    const filter3: ModelViqRecordingRedactionFilterInput = {viqRecordingRedactionViqRecordingUrlId: {eq: urlId}};
    this.api.ListViqRecordingRedactions(filter3).then(redactions => {
      this.redactions = redactions.items;
      console.log('redactions', this.redactions);
    });
  }

  public getVersion(d) {
    return this.dateHelper.format(new Date(+d));
  }

  public finish() {
    const input = {
      id: '',
      redactionVersion: (new Date()).getTime().toString(),
      startSecond: 0,
      endSecond: 0,
      type: 'End',
      viqRecordingRedactionViqRecordingUrlId: this.data.source.id
    };
    this.api.CreateViqRecordingRedaction(input).then(r => {
      this.refresh();
    });
    this.back();
  }

  public back() {
    this.router.navigate(['/recording-details', this.recordingId]);
  }
}
