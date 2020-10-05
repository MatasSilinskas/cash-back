import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsListComponent} from './events-list/events-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {EventsListItemComponent} from './events-list-item/events-list-item.component';
import {FriendsModule} from '../friends/friends.module';
import {NewEventModalComponent} from './new-event-modal/new-event-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [EventsListComponent, EventsListItemComponent, NewEventModalComponent],
  exports: [
    EventsListComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    FriendsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class EventsModule {
}
