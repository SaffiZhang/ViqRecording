import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';
import {APIService} from '../API.service';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.scss']
})
export class RedactComponent implements OnInit {

  public recordingId: string;
  public sources: any[];

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
              private api: APIService) {
    this.data = this.router.getCurrentNavigation().extras.state;
    console.log('data', this.data);
  }

  ngOnInit() {

    if (!this.data) {
      this.router.navigate(['recording-list']);
    }
    this.recordingId = this.data.recordingId;
    this.sources = [this.data.source];
    this.api.GetViqRecordingRedaction(this.recordingId).then(r => {
      console.log(r);
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
      redactionVersion: '',
      startSecond: this.startTime,
      endSecond: this.endTime,
      type: this.redactType,
      viqRecordingRedactionViqRecordingUrlId: this.recordingId
    };
    this.api.CreateViqRecordingRedaction(input).then(result => {
      this.api.GetViqRecordingRedaction(this.recordingId).then(r => {
        console.log(r);

      });
    });
  }
}
