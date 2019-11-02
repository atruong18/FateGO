import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropComponent } from './routes/drop/drop.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { IconModule } from './icon.module';

@NgModule({
  declarations: [
    AppComponent,
    DropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
