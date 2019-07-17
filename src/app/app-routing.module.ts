import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {RecordingListComponent} from './recording-list/recording-list.component';
import {RecordingComponent} from './recording/recording.component';
import {RecordingDetailsComponent} from './recording-details/recording-details.component';
import {RedactComponent} from './redact/redact.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'recording',
    component: RecordingComponent
  },
  {
    path: 'recording-details/:id',
    component: RecordingDetailsComponent
  },
  {
    path: 'recording-list',
    component: RecordingListComponent
  },
  {
    path: 'redact',
    component: RedactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
