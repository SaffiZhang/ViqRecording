import {Component, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input()
  public id: string;

  @Input('sources')
  public set setSources(value: any[]) {
    this.sources = value;
    this.sources.sort((x, y) => {
      return y.version - x.version;
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

  constructor() {
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
}
