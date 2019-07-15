import {Component, OnInit, ViewChild} from '@angular/core';
import {APIService, GetViqRecordingQuery} from '../API.service';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {ActivatedRoute} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';

@Component({
  selector: 'app-recording-details',
  templateUrl: './recording-details.component.html',
  styleUrls: ['./recording-details.component.scss']
})
export class RecordingDetailsComponent implements OnInit {
  private recording: GetViqRecordingQuery;

  public sources: any[];

  public time: any;

  public state: any;

  private playerApi: VgAPI;

  public isAddingAttachment = false;

  @ViewChild('player1', {static: false})
  public player1: VideoPlayerComponent;
  @ViewChild('player2', {static: false})
  public player2: VideoPlayerComponent;

  constructor(private api: APIService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const rid = this.route.snapshot.paramMap.get('id');
    await this.refresh(rid);

  }

  private async refresh(id) {
    this.recording = await this.getRecording(id);
    console.log(this.recording);
    const sobj = {};
    const sr = [];
    if (this.recording.recordingUrls && this.recording.recordingUrls.items) {
      this.recording.recordingUrls.items.forEach(r => {
        if (!sobj[r.camera]) {
          sobj[r.camera] = [];
        }
        sobj[r.camera].push(
          {
            src: r.url,
            type: 'audio/mp4',
            date: r.lastmodified,
            id: r.id,
            description: r.description,
            camera: r.camera,
            version: r.version
          }
        );
      });
      Object.keys(sobj).forEach(k => {
        sr.push(sobj[k]);
      });

    }
    this.sources = [...sr];
  }

  async updateRecording(recording) {
    try {
      let result = await this.api.UpdateViqRecording(recording);
    } catch (e) {
      console.log(e);
    }

  }

  async getRecording(id) {
    return await this.api.GetViqRecording(id);
  }


  public addAttachment() {
    this.isAddingAttachment = true;
  }

  public addAttachmentSaved($event) {
    // const newAttachment = {
    //   id: null,
    //   description: '',
    //   url: '',
    //   viqRecordingAttachmentViqRecordingId: this.recording.id
    // };
    // this.api.CreateViqRecordingAttachment(newAttachment).then(r => {
    //
    // });
    this.isAddingAttachment = false;
  }

  public addAttachmentCancelled($event) {
    this.isAddingAttachment = false;
  }

  assignUpdateInput() {
    // this.updateRecordingInput = {
    //   Id: '2',
    //   interviewee: 'Tom Cruise',
    //   recordings: [
    //     {
    //       "lastModified": "Jul 4, 2019 2:53:16 PM GMT-0400",
    //       "url": "https://viq-recording.s3.amazonaws.com/SR607E21/2019/06/28/SR607E21-20190628_181526-audio_P1-1.mp3"
    //     }
    //   ]
    // }
  }

  getAnnotation(annotationPromise) {
    var annotation = {annotationTime: '', text: ''};
    annotation.annotationTime = annotationPromise.annotationTime;
    annotation.text = annotationPromise.text;
    return annotation;
  }


  public play() {
    this.player2.mute();
    this.player1.play();
    this.player2.play();
  }

  public pause() {
    this.player1.pause();
    this.player2.pause();
  }
}
