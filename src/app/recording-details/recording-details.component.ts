import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {APIService, GetCaseQuery, ModelLogFilterInput} from '../API.service';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoPlayerComponent} from '../video-player/video-player.component';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {AttachmentListComponent} from '../attachment-list/attachment-list.component';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {EventBusService} from '../services/event-bus-service';
import {AddPipe} from 'ngx-moment';
import {LogListComponent} from '../log-list/log-list.component';

@Component({
  selector: 'app-recording-details',
  templateUrl: './recording-details.component.html',
  styleUrls: ['./recording-details.component.scss'],
})

export class RecordingDetailsComponent implements OnInit, OnDestroy {
  private recording: GetCaseQuery;

  public userName = 'saffi zhang';
  private logs: any[];

  public sources: any[];

  public time: any;

  public state: any;

  private playerApi: VgAPI;

  public isAddingAttachment = false;

  @ViewChild('player1', {static: false})
  public player1: VideoPlayerComponent;
  @ViewChild('player2', {static: false})
  public player2: VideoPlayerComponent;

  @ViewChild('attachmentList', {static: false})
  public attachmentList: AttachmentListComponent;

  @ViewChild('loglist', {static: false})
  public logList: LogListComponent;

  public urls: any[];

  public subs: Subscription[] = [];

  public caseId;

  constructor(private api: APIService,
              private router: Router,
              private dateTimeHelper: DatetimeHelperService,
              private messageService: MessageService,
              private eventBus: EventBusService,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const rid = this.route.snapshot.paramMap.get('id');
    this.caseId = rid;
    await this.refresh(rid);

    this.subs.push(this.eventBus.currentUser.subscribe(r => {
      this.userName = r.username;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  private async refresh(id) {
    this.recording = await this.getCase(id);
    console.log(this.recording);
    const sobj = {};
    const sr = [];
    if (this.recording.recordings && this.recording.recordings.items) {
      this.urls = this.recording.recordings.items;

      this.recording.recordings.items.forEach(r => {
        if (!sobj[r.camera]) {
          sobj[r.camera] = [];
        }
        const type = r.url.indexOf('.mp4') ? 'video/mp4' : 'audio/mp3';
        sobj[r.camera].push(
          {
            src: r.url,
            type: type,
            id: r.id,
            description: r.description,
            camera: r.camera,
            version: this.dateTimeHelper.format(new Date(r.version)),
            startTime: this.recording.interviewStart
          }
        );
      });
      Object.keys(sobj).forEach(k => {
        sr.push(sobj[k]);
      });

    }
    this.sources = [...sr];
    await this.loadLogs(id);
  }

  private async loadLogs(id) {
    const filter: ModelLogFilterInput = {logCaseId: {eq: id}};
    const xx = await this.api.ListLogs(filter, 200);
    this.logs = xx.items;
  }

  async updateRecording(recording) {
    try {
      let result = await this.api.UpdateRecording(recording);
    } catch (e) {
      console.log(e);
    }

  }

  async getCase(id) {
    return await this.api.GetCase(id);
  }


  public addAttachment() {
    this.isAddingAttachment = true;
  }

  public addAttachmentSaved($event) {
    this.attachmentList.refresh();
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
    if (this.player2) {
      this.player2.mute();
      this.player2.play();
    }
    if (this.player1) {
      this.player1.play();
    }

  }

  public pause() {
    if (this.player1) {
      this.player1.pause();
    }
    if (this.player2) {
      this.player2.pause();
    }
  }

  public submit() {
    const input = {
        id: '',
        submitTime: this.dateTimeHelper.format(new Date()),
        status: 'Submitted',
        transcriptionCaseId: this.recording.id
      }
    ;
    this.api.CreateTranscription(input).then(r => {
      this.messageService.add({
        severity: 'success',
        summary: '',
        detail: 'Transcription is summitted!',
        key: 'transcription'
      });
    });
  }

  public get uploadPath() {
    if (this.recording.path.endsWith('/')) {
      return `${this.recording.path}attachment-${this.recording.id}/`;
    } else {
      return `${this.recording.path}/attachment-${this.recording.id}/`;
    }
  }

  public back() {
    this.router.navigate(['recording-list']);
  }

  public addBookmark() {
    this.pause();
    this.player1.showBookmarkDialog();
  }

  public tabViewChanged($event) {
    console.log($event.index);
    if ($event.index === 2) {
      this.logList.refresh();
    }
  }
}
