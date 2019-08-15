import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {RecordingListComponent} from './recording-list/recording-list.component';
import {RecordingComponent} from './recording/recording.component';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/src/overlay-play/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';
import {ButtonModule} from 'primeng/button';
import {
  BlockUIModule,
  CardModule,
  DropdownModule, FileUploadModule,
  InputMaskModule,
  InputTextareaModule,
  InputTextModule, MessageModule, MessageService, MessagesModule,
  TabViewModule
} from 'primeng/primeng';
import {AnnotationListComponent} from './annotation-list/annotation-list.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddAnnotationComponent} from './add-annotation/add-annotation.component';
import {AttachmentListComponent} from './attachment-list/attachment-list.component';
import {AddAttachmentComponent} from './add-attachment/add-attachment.component';
import {S3_PARAMS} from './services/tokens';
import {s3Params} from './services/s3-params';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {RecordingInfoComponent} from './recording-info/recording-info.component';
import {RecordingDetailsComponent} from './recording-details/recording-details.component';
import {LogListComponent} from './log-list/log-list.component';
import {AppTopMenubarComponent} from './app-top-menubar/app-top-menubar.component';
import {RedactComponent} from './redact/redact.component';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import { EmailListComponent } from './email-list/email-list.component';
import { RecordingSharedComponent } from './recording-shared/recording-shared.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateCaseUploadMediaComponent } from './create-case-upload-media/create-case-upload-media.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RecordingListComponent,
    RecordingComponent,
    AnnotationListComponent,
    AddAnnotationComponent,
    AttachmentListComponent,
    AddAttachmentComponent,
    VideoPlayerComponent,
    RecordingInfoComponent,
    RecordingDetailsComponent,
    LogListComponent,
    AppTopMenubarComponent,
    RedactComponent,
    EmailListComponent,
    RecordingSharedComponent,
    CreateCaseComponent,
    CreateCaseUploadMediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    HttpClientModule,

    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,


    ButtonModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    CardModule,
    InputTextareaModule,
    InputMaskModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    FileUploadModule,
    BlockUIModule

  ],
  providers: [
    AmplifyService,
    {
      provide: S3_PARAMS,
      useValue: s3Params
    },
    {
      provide: MessageService,
      useClass: MessageService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
