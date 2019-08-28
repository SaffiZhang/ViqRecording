import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {RecordingListComponent} from './recording-list/recording-list.component';
import {RecordingComponent} from './recording/recording.component';
import {RecordingDetailsComponent} from './recording-details/recording-details.component';
import {RedactComponent} from './redact/redact.component';
import {RecordingSharedComponent} from './recording-shared/recording-shared.component';
import {AuthGuard} from './services/auth.guard';
import {CreateCaseComponent} from './create-case/create-case.component';
import {CreateCaseUploadMediaComponent} from './create-case-upload-media/create-case-upload-media.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'create-case',
    component: CreateCaseComponent
  },
  {
    path: 'upload-media/:id',
    component: CreateCaseUploadMediaComponent,
  },
  {
    path: 'recording',
    component: RecordingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recording-details/:id',
    component: RecordingDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recording-list',
    component: RecordingListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'redact',
    component: RedactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recordingshared/:id',
    component: RecordingSharedComponent
  },
  {
    path: '',
    component: RecordingListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
