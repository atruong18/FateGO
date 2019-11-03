import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropComponent } from './routes/drop/drop.component';
import { ItemDropTableComponent } from './components/item-drop-table/item-drop-table.component';
import { ItemAnchorLinksComponent } from './components/item-anchor-links/item-anchor-links.component';

@NgModule({
  declarations: [
    AppComponent,
    DropComponent,
    ItemDropTableComponent,
    ItemAnchorLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
