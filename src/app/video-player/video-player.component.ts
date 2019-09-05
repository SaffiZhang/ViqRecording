import {Component, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {Router} from '@angular/router';
import {AddPipe, DateFormatPipe, FromUtcPipe} from 'ngx-moment';
import {EventBusService} from '../services/event-bus-service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  providers: [AddPipe, DateFormatPipe]
})
export class VideoPlayerComponent implements OnInit {

  @Input()
  public id: string;

  @Input('recording-id')
  public recordingId: string;

  @Input('show-info')
  public showInfo = true;

  @Input('sources')
  public set setSources(value: any[]) {
    this.sources = value;
    this.sources.sort((x, y) => {
      return (new Date(y.version).getTime()) - (new Date(x.version).getTime());
    });
    console.log(this.sources);
    if (value && value.length > 0) {
      this.selectedSource = value[0];
    }
    this.sources.forEach(x => {
      x.displayLabel = `Ver. (${x.version})`;
    });
  }

  @Input('show-bookmark')
  public showBookmark = false;

  public sources: any[];

  private playerApi: VgAPI;
  private time: any;
  private state: string;

  public selectedSource: any;

  @Input('show-redaction')
  public showRedaction = true;

  @Input('show-version')
  public showVersion = true;

  @Input('show-checkbox')
  public showCheckbox = false;

  public isChecked = false;

  constructor(private router: Router,
              private eventBus: EventBusService,
              private addPipe: AddPipe,
              private formatPipe: DateFormatPipe) {
  }

  ngOnInit() {
    if (!this.id) {
      this.id = 'player_' + Math.ceil(Math.random());
    }
  }

  public onPlayerReady(api: VgAPI) {
    this.playerApi = api;
    this.time = this.playerApi.time;
    this.state = this.playerApi.state;
  }

  public play() {
    this.playerApi.play();
  }

  public pause() {
    this.playerApi.pause();
  }

  public mute() {
    this.volume(0);
  }

  public volume(v: number) {
    if (v >= 0 && v <= 1) {
      this.playerApi.volume = v;
    }
  }

  public redact($event) {
    $event.preventDefault();
    const len = this.sources.length;
    const rec = this.sources[len - 1];
    this.router.navigate(['/redact'], {
      state: {
        caseId: this.recordingId,
        recordingId: this.selectedSource.id,
        source: this.selectedSource,
        originalRecordingId: rec.id,
      }
    });
    return false;
  }

  public getTime() {
    return this.playerApi.time;
  }

  public isBookmarkDialogVisible = false;

  public bookmarkDescription: string;
  public bookmarkStarttime: string;

  public showBookmarkDialog() {
    console.log(this.recordingId);
    const time = this.getTime();
    const seconds = time.current / 1000;
    const startTime = new Date(this.selectedSource.startTime);
    this.bookmarkStarttime = this.addPipe.transform(startTime, seconds, 'seconds');
    this.isBookmarkDialogVisible = true;
  }

  public save() {
    if (!!this.bookmarkDescription) {
      const payload = {
        caseId: this.recordingId,
        time: (new Date(this.bookmarkStarttime)).toISOString(),
        description: this.bookmarkDescription,
      };
      console.log(payload);
      this.eventBus.notifyAddbookmark(payload);
    }
    this.isBookmarkDialogVisible = false;
  }

  public cancel() {
    this.isBookmarkDialogVisible = false;
  }
}
