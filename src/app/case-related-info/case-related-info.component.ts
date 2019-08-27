import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {APIService, ModelStringFilterInput} from '../API.service';
import {EventBusService} from '../services/event-bus-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-case-related-info',
  templateUrl: './case-related-info.component.html',
  styleUrls: ['./case-related-info.component.scss']
})
export class CaseRelatedInfoComponent implements OnInit, OnDestroy {

  @Input('case-id')
  public set setCaseId(value) {
    this.caseId = value;
    this.refreshTranscript();
    this.refreshBookmark();
  }

  public isBookmarkDialogVisible = false;
  public editingItem;
  private caseId: string;
  public hasTranscriptFile = false;

  private subs: Subscription[] = [];
  public transcriptFile = '';
  // 'https://david-horn-recording.s3.amazonaws.com/25.pdf';
  // public transcriptFile = 'https://david-horn-recording.s3.amazonaws.com/Transcription/25.pdf';
  // public transcriptFile = 'https://david-horn-recording.s3.amazonaws.com/123/attachment-f39e804b-aa2d-429d-a0a8-7e4fbce17596/.pdf'
  // public transcriptFile = 'https://david-horn-recording.s3.amazonaws.com/import/yubinz/2019/8/23/redaction_4b69d61f-ddfa-46f1-8a76-e473c62d7120.mp4'

  public bookmarks: any[] = [];

  private currentUser: any;

  constructor(private api: APIService,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.subs.push(this.eventBus.addBookmarkRequest.subscribe(r => {
      this.addBookmark(r);
    }));
    this.subs.push(this.eventBus.currentUser.subscribe(r => {
      this.currentUser = r;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  private refreshTranscript() {
    const input = {
      transcriptionCaseId: {eq: this.caseId}
    };
    this.api.ListTranscriptions(input).then(r => {
      console.log('case transcription:', r);
      if (r.items.length > 0) {
        const items = r.items.filter(x => !!x.transcriptionFileUrl);
        if (items && items.length > 0) {
          this.transcriptFile = items[0].transcriptionFileUrl;
          this.hasTranscriptFile = true;
        }
      }
    });

  }

  private refreshBookmark() {
    const input = {
      bookmarkCaseId: {eq: this.caseId}
    };
    this.api.ListBookmarks(input).then(r => {
      this.bookmarks = r.items;
      if (this.bookmarks.length > 0) {
        this.bookmarks.sort((x, y) => x.order - y.order);
      }
      console.log('bookmarks', r);
    });
  }

  private addBookmark(payload) {
    const input = {
      id: '',
      order: this.bookmarks.length + 1,
      dateTime: payload.time,
      speaker: 'unknown',
      content: payload.description,
      updatedDateTime: (new Date()).toISOString(),
      updatedBy: this.currentUser.username,
      bookmarkCaseId: payload.caseId,
    };
    this.api.CreateBookmark(input).then(r => {
      this.refreshBookmark();
    }).catch(err => {
      console.log(err);
    });
  }


  private savedOriginalItem: any;

  public editBookmark(item) {
    this.editingItem = JSON.parse(JSON.stringify(item));
    this.savedOriginalItem = JSON.parse(JSON.stringify(item));
    delete this.savedOriginalItem['case'];
    this.isBookmarkDialogVisible = true;
  }

  public save() {
    const input = {
      id: this.editingItem.id,
      order: this.editingItem.order,
      dateTime: this.editingItem.time,
      speaker: 'unknown',
      content: this.editingItem.content,
      updatedDateTime: (new Date()).toISOString(),
      updatedBy: this.currentUser.username,
      bookmarkCaseId: this.editingItem.caseId,
    };
    this.api.UpdateBookmark(input).then(r => {
      this.isBookmarkDialogVisible = false;
      this.refreshBookmark();
      const dt = (new Date()).toISOString();
      this.api.CreateLog({
        id: '',
        dateTime: dt,
        description: 'Bookmark changed to:' + JSON.stringify(input) + ', from: ' + JSON.stringify(this.savedOriginalItem),
        userName: this.currentUser ? this.currentUser.username : 'unknown',
        recordId: 'unknown',
        tableName: 'bookmark',
        logCaseId: this.caseId,
      });
    }).catch(err => {
      this.isBookmarkDialogVisible = false;
      console.log(err);
    });
  }

  public cancel() {
    this.isBookmarkDialogVisible = false;
    this.editingItem = null;
  }
}
