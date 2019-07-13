import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-add-annotation',
  templateUrl: './add-annotation.component.html',
  styleUrls: ['./add-annotation.component.scss']
})
export class AddAnnotationComponent implements OnInit {

  public annotationText: string;

  @Input('recording-id')
  public recordingId;

  @Input('recording-start')
  public set setRecordingStartTime(value) {
    this.recordingStartTime = value;
    this.calculateAnnotationTime();
  }

  @Input('offset')
  public set setOffset(value) {
    this.offset = value;
    this.calculateAnnotationTime();
  }

  @Output()
  public saved: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public cancelled: EventEmitter<any> = new EventEmitter<any>();

  private recordingStartTime;
  private offset;
  public annotationTime;

  constructor(private api: APIService) {
  }

  ngOnInit() {
  }

  public calculateAnnotationTime() {
    if (this.recordingStartTime) {
      console.log('recording time:', this.recordingStartTime);
      let dt = new Date(this.recordingStartTime);
      const tm = dt.getTime() + (this.offset || 0);
      dt = new Date(tm);
      console.log('offset:', this.offset);
      console.log(dt);
      this.annotationTime = [dt.getFullYear(),
          this.padZero(dt.getMonth() + 1),
          this.padZero(dt.getDate())].join('-') + ' ' +
        [this.padZero(dt.getHours()),
          this.padZero(dt.getMinutes()),
          this.padZero(dt.getSeconds())].join(':');
    } else {
      this.annotationTime = '';
    }
  }


  private padZero(value) {
    return ('00' + value.toString()).slice(-2);
  }

  public save() {
    this.saved.emit({
      annotationTime: this.annotationTime,
      text: this.annotationText
    });
    console.log(this.recordingStartTime);
    console.log(this.offset);
  }

  public cancel() {
    this.cancelled.emit({});
  }
}
