import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import { RecordingComponent} from './recording/recording.component';
import{RecordingListComponent}from './recording-list/recording-list.component';
const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'recording',
    component:RecordingComponent
  },
  {
    path:'recording-list',
    component:RecordingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
