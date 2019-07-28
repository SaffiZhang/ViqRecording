import {Component, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
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
      return (new Date(y.date).getTime()) - (new Date(x.date).getTime());
    });
    console.log(this.sources);
    if (value && value.length > 0) {
      this.selectedSource = value[0];
    }
    this.sources.forEach(x => {
      x.displayLabel = `Ver. (${x.version})  ${x.date}`;
    });
  }

  public sources: any[];

  private playerApi: VgAPI;
  private time: any;
  private state: string;

  public selectedSource: any;

  @Input('show-redaction')
  public showRedaction = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (!this.id) {
      this.id = 'player_' + Math.ceil(Math.random());
    }
    console.log(this.showRedaction);
    debugger;
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
    this.router.navigate(['/redact'], {
      state: {
        recordingId: this.recordingId,
        source: this.selectedSource
      }
    });
    return false;
  }

  public getTime() {
    return this.playerApi.time;
  }
}
