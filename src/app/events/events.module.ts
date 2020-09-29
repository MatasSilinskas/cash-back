import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [EventsListComponent],
  exports: [
    EventsListComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ]
})
export class EventsModule { }
