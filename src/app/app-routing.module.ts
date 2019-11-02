import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropComponent } from './routes/drop/drop.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: DropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
