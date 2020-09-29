import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { EventsListItemComponent } from './events-list-item/events-list-item.component';


@NgModule({
  declarations: [EventsListComponent, EventsListItemComponent],
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
