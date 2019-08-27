import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {Subscription} from 'rxjs';
import {EventBusService} from '../services/event-bus-service';
import has = Reflect.has;

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

  private showError = false;
  private dobFormatError = false;

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
    this.showError = false;
    this.dobFormatError = false;
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
    this.showError = false;
    this.dobFormatError = false;
    let hasError = false;

    if (!this.editingRecording.officer) {
      hasError = true;
    }
    if (!this.editingRecording.interviewee) {
      hasError = true;
    }
    const dob = this.editingRecording.dob;
    if (!dob) {
      hasError = true;
    } else {
      const parts = dob.split('/');
      const y2 = parts[0].substr(0, 2);
      if (y2 !== '19' && y2 !== '20') {
        this.dobFormatError = true;
        hasError = true;
      }
      if (+parts[1] > 12) {
        this.dobFormatError = true;
        hasError = true;
      }
      if (+parts[2] > 31) {
        this.dobFormatError = true;
        hasError = true;
      }
      try {
        const d = new Date(dob);
        if (d.toString() === 'Invalid Date') {
          this.dobFormatError = true;
          hasError = true;
        }
      } catch (e) {
        this.dobFormatError = true;
        hasError = true;
      }
    }
    if (hasError) {
      this.showError = true;
      return;
    }

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
