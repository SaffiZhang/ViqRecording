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
    if (value && value.length > 0) {
      this.selectedSource = value[0];
    }
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
}
