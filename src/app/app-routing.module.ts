import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropComponent } from './routes/drop/drop.component';

export enum RoutePath {
  DROPS = 'drop'
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RoutePath.DROPS },
  { path: RoutePath.DROPS, component: DropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', scrollOffset: [0, 64] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
