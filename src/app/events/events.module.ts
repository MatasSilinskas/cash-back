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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ValuePipe } from './events-list-item/value.pipe';


@NgModule({
  declarations: [EventsListComponent, EventsListItemComponent, NewEventModalComponent, ValuePipe],
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
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class EventsModule {
}
