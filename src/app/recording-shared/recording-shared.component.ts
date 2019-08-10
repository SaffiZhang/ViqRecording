import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APIService, ModelRecordingFilterInput, ModelSharedFilterInput} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';

@Component({
  selector: 'app-recording-shared',
  templateUrl: './recording-shared.component.html',
  styleUrls: ['./recording-shared.component.scss']
})
export class RecordingSharedComponent implements OnInit {

  private showError = false;

  constructor(private route: ActivatedRoute,
              private dateTimeHelper: DatetimeHelperService,
              private api: APIService) {
  }

  private recording: any;
  private sources: any[];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.showError = true;
      return;
    }
    const filter5: ModelSharedFilterInput = {id: {eq: id}};
    this.api.ListShareds(filter5).then(r => {

      const sharedItem = r.items[0];
      const recordingId = sharedItem.case.id;
      const filter4: ModelRecordingFilterInput = {id: {eq: recordingId}};
      this.api.GetRecording(recordingId).then(rec => {
        this.recording = rec;
        console.log(this.recording);
        this.prepare();
      });
    });
  }

  private prepare() {
    const sobj = {};
    const sr = [];
    if (this.recording.recordingUrls && this.recording.recordingUrls.items) {

      this.recording.recordingUrls.items.forEach(r => {
        if (!sobj[r.camera]) {
          sobj[r.camera] = [];
        }
        const type = r.url.indexOf('.mp4') ? 'video/mp4' : 'audio/mp3';
        sobj[r.camera].push(
          {
            src: r.url,
            type: type,
            date: r.lastmodified,
            id: r.id,
            description: r.description,
            camera: r.camera,
            version: this.dateTimeHelper.format(new Date(r.version))
          }
        );
      });
      Object.keys(sobj).forEach(k => {
        sr.push(sobj[k]);
      });

    }
    this.sources = [...sr];
  }

}
