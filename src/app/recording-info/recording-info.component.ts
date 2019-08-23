import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {Subscription} from 'rxjs';
import {EventBusService} from '../services/event-bus-service';

@Component({
  selector: 'app-recording-info',
  templateUrl: './recording-info.component.html',
  styleUrls: ['./recording-info.component.scss']
})
export class RecordingInfoComponent implements OnInit, OnDestroy {

  @Input('recording')
  public set setRecording(value: any) {
    this.recording = value;
  }

  @Input('case-id')
  public caseId: string;

  public recording: any;
  public editingRecording: any;

  private originalValue: any;

  private isEditing = false;

  private currentUser: any;
  private subs: Subscription[] = [];

  constructor(private api: APIService,
              private eventBus: EventBusService,
              private dateTimeHepler: DatetimeHelperService) {
  }

  ngOnInit() {
    this.subs.push(this.eventBus.currentUser.subscribe(r => {
      this.currentUser = r;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  startEdit() {
    this.editingRecording = {
      officer: this.recording.officerCollarNumber,
      interviewee: this.recording.interviewee,
      dob: this.recording.birthdayOfInterviewee,
      note: this.recording.note,
    };
    this.originalValue = JSON.parse(JSON.stringify(this.editingRecording));
    this.isEditing = true;
  }

  public save() {
    this.recording.officerCollarNumber = this.editingRecording.officer;
    this.recording.birthdayOfInterviewee = this.editingRecording.dob;
    this.recording.note = this.editingRecording.note;
    this.recording.interviewee = this.editingRecording.interviewee;
    // this.recording.location = this.editingRecording.location;

    const input = {
      id: this.recording.id,
      note: this.editingRecording.note,
      interviewee: this.editingRecording.interviewee,
      birthdayOfInterviewee: this.editingRecording.dob,
      officerCollarNumber: this.editingRecording.officer
    };
    this.api.UpdateCase(input).then(r => {

    });
    const dt = new Date().toISOString();
    this.api.CreateLog({
      id: '',
      dateTime: dt,
      description: 'Metadata changed',
      userName: this.currentUser ? this.currentUser.username : 'unknown',
      recordId: this.recording.id,
      tableName: 'case',
      logCaseId: this.caseId,
    });
    this.api.CreateLog({
      id: '',
      dateTime: dt,
      description: 'Old metadata:' + JSON.stringify(this.originalValue),
      userName: this.currentUser ? this.currentUser.username : 'unknown',
      recordId: this.recording.id,
      tableName: 'case',
      logCaseId: this.caseId,
    });
    this.api.CreateLog({
      id: '',
      dateTime: dt,
      description: 'New metadata:' + JSON.stringify(this.editingRecording),
      userName: this.currentUser ? this.currentUser.username : 'unknown',
      recordId: this.recording.id,
      tableName: 'case',
      logCaseId: this.caseId,
    });
    this.isEditing = false;
  }

  public cancel() {
    this.isEditing = false;
  }
}
