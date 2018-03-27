import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideComponent } from "../components/slide/slide.component";

const routes: Routes = [
  { path: '', redirectTo: '/slide/0', pathMatch: 'full' },
  { path: 'slide/:id', component: SlideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
