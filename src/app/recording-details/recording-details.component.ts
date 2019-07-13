import {Component, OnInit} from '@angular/core';
import {APIService, GetViqRecordingQuery} from '../API.service';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recording-details',
  templateUrl: './recording-details.component.html',
  styleUrls: ['./recording-details.component.scss']
})
export class RecordingDetailsComponent implements OnInit {
  private recording: GetViqRecordingQuery;

  public sources: any[];

  public availableSources: any[];
  public time: any;

  public state: any;

  private playerApi: VgAPI;

  public isAddingAnnotation = false;

  public isAddingAttachment = false;

  private selectedSource1: any;

  public set selectedSource(value: any) {
    this.selectedSource1 = value;
    console.log(value);
    const r = {
      src: value.src,
      type: 'audio/mp4',
      date: value.date,
      id: value.id
    };
    this.sources = [r];
  }

  public get selectedSource() {
    return this.selectedSource1;
  }

  constructor(private api: APIService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const rid = this.route.snapshot.paramMap.get('id');
    await this.refresh(rid);

  }

  private async refresh(id) {
    this.recording = await this.getRecording(id);
    console.log(this.recording);
    const sr = [];
    if (this.recording.recordingUrls && this.recording.recordingUrls.items) {
      this.recording.recordingUrls.items.forEach(r => {
        sr.push({
          src: r.url,
          type: 'audio/mp4',
          date: r.lastmodified,
          id: r.id,
          description: r.description,
          camera: r.camera,
          version: r.version
        });
      });
    }
    if (sr.length > 0) {
      this.availableSources = [...sr];
      this.sources = [
        [sr[0]],
        [sr[1]]
      ];
      // this.sources[0].src = 'https://david-horn-ap.s3.us-east-2.amazonaws.com/SR607E21-20190628_181526-audio_P1-1.mp3';
    }
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

  public onPlayerReady(api: VgAPI) {
    this.playerApi = api;
    this.time = this.playerApi.time;
    this.state = this.playerApi.state;
  }

  public pause() {
    this.playerApi.pause();
    this.time = this.playerApi.time;
    this.state = this.playerApi.state;
  }

  public play() {

    this.playerApi.play();

  }

  public get recordingDateTimeTitle() {
    if (this.recording && this.sources && this.sources.length > 0) {
      const lm = this.sources[0].date;
      return lm;
    }
    return '';
  }


  public addAnnotation() {
    this.playerApi.pause();
    this.time = this.playerApi.time;
    this.isAddingAnnotation = true;
  }

  public addAnnotationSaved($event) {
    const newlog = {
      id: '',
      dateTime: $event.annotationTime,
      description: $event.text,
      viqRecordingLogViqRecordingId: this.recording.id
    };
    this.api.CreateViqRecordingLog(newlog).then((r) => {
      // this.refresh(this.recording.id);
      delete r.viqRecording;
      this.recording.logs.items = [...this.recording.logs.items, r];
    });
    this.isAddingAnnotation = false;
  }

  public addAnnotationCanceled($event) {
    this.isAddingAnnotation = false;
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

}
