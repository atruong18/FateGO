import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pgs from './pages';

const routes: Routes = [
  {path: '', component: pgs.DropRateComponent },
  {path: 'droprates', component: pgs.DropRateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
