import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootSlideComponent } from '../components/root-slide/root-slide.component';

const routes: Routes = [
  { path: '', redirectTo: '/slide/1', pathMatch: 'full' },
  { path: 'slide/:id', component: RootSlideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
