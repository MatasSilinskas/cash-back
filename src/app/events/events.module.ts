import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';


@NgModule({
  declarations: [EventsListComponent],
  exports: [
    EventsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
