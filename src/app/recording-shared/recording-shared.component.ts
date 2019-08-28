import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {APIService} from '../API.service';
import {DatetimeHelperService} from '../services/datetime-helper.service';
import {EventBusService} from '../services/event-bus-service';

@Component({
  selector: 'app-recording-shared',
  templateUrl: './recording-shared.component.html',
  styleUrls: ['./recording-shared.component.scss']
})
export class RecordingSharedComponent implements OnInit {

  private showError = false;

  constructor(private route: ActivatedRoute,
              private dateTimeHelper: DatetimeHelperService,
              private api: APIService,
              private eventBus: EventBusService,
              private router: Router) {
  }

  private recording: any;
  private sources: any[];

  private shareRecord: any;
  private hasRecord = false;

  public pin;
  public pinVerifyCount = 0;
  public pinVerified = false;

  public case: any;

  ngOnInit() {
    this.eventBus.notifyShowMenuChange(false);

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.showError = true;
      return;
    }
    this.api.GetShared(id).then(r => {
      if (r) {
        this.shareRecord = r;
        this.case = r.case;
        this.hasRecord = true;
      } else {
        this.showError = true;
      }
    }).catch(err => {
      this.showError = true;
    });
  }

  public verifyPin() {
    this.pinVerifyCount++;
    if (this.pin) {
      if (this.pin === this.shareRecord.token) {
        this.pinVerified = true;
        this.pinVerifyCount = 0;
        this.prepare()
      }
    }
  }

  private prepare() {
    const sobj = {};
    const sr = [];
    if (this.shareRecord) {

      this.shareRecord.urls.forEach(u => {
        if (!sobj[u]) {
          sobj[u] = [];
        }
        const type = u.indexOf('.mp4') ? 'video/mp4' : 'audio/mp3';
        sobj[u].push(
          {
            src: u,
            type: type,
            // date: r.lastmodified,
            // id: r.id,
            // description: r.description,
            // camera: r.camera,
            // version: this.dateTimeHelper.format(new Date(r.version))
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
