import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';

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

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {

    if (!this.data) {
      this.router.navigate(['recording-list']);
    }
    this.recordingId = this.data.recordingId;
    this.sources = [this.data.source];
  }


  public getStartTime() {
    this.startTime = this.player.getTime();
  }

  public getEndTime() {
    this.endTime = this.player.getTime();
  }
}
