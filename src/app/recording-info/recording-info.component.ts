import {Component, Input, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';

@Component({
  selector: 'app-recording-info',
  templateUrl: './recording-info.component.html',
  styleUrls: ['./recording-info.component.scss']
})
export class RecordingInfoComponent implements OnInit {

  @Input('recording')
  public set setRecording(value: any) {
    this.recording = value;
  }

  public recording: any;
  public editingRecording: any;

  private originalValue: any;

  private isEditing = false;

  constructor(private api: APIService, private dateTimeHepler: DatetimeHelperService) {
  }

  ngOnInit() {
  }

  startEdit() {
    this.editingRecording = {
      officer: this.recording.officerCollarNumber,
      interviewee: this.recording.interviewee,
      dob: this.recording.dob,
      note: this.recording.note,
      location: this.recording.location
    };
    this.originalValue = JSON.parse(JSON.stringify(this.editingRecording));
    this.isEditing = true;
  }

  public save() {
    this.recording.officerCollarNumber = this.editingRecording.officer;
    this.recording.interviewee = this.editingRecording.interviewee;
    this.recording.dob = this.editingRecording.dob;
    this.recording.note = this.editingRecording.note;
    this.recording.location = this.editingRecording.location;

    const input = {
      id: this.recording.id,
      interviewee: this.editingRecording.interviewee,
      interviewFinish: this.recording.interviewFinish,
      interviewStart: this.recording.interviewStart,
      officerCollarNumber: this.editingRecording.officer,
      location: this.recording.location,
      unitId: this.recording.unitId,
    };
    this.api.UpdateViqRecording(input);
    const dt = this.dateTimeHepler.format(new Date());
    this.api.CreateViqRecordingLog({
      id: '',
      dateTime: dt,
      description: 'Metadata changed',
      viqRecordingLogViqRecordingId: this.recording.id,
    });
    this.api.CreateViqRecordingLog({
      id: '',
      dateTime: dt,
      description: 'Old metadata:' + JSON.stringify(this.originalValue),
      viqRecordingLogViqRecordingId: this.recording.id,
    });
    this.api.CreateViqRecordingLog({
      id: '',
      dateTime: dt,
      description: 'New metadata:' + JSON.stringify(this.editingRecording),
      viqRecordingLogViqRecordingId: this.recording.id,
    });
    this.isEditing = false;
  }

  public cancel() {
    this.isEditing = false;
  }
}
