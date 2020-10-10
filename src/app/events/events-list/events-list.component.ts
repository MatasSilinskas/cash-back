import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {IEvent} from '../event.interface';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {NewEventModalComponent} from '../new-event-modal/new-event-modal.component';
import {CurrentUserService} from '../../shared-services/current-user.service';
import {IUser} from '../../shared-services/user.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss', '../../shared-styles.scss']
})
export class EventsListComponent implements OnInit, OnDestroy {
  public events: IEvent[];
  public currentUser: IUser;

  private destroy$ = new Subject();

  constructor(private eventService: EventService, private dialog: MatDialog, private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.eventService.getEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe(events => this.events = events);

    this.currentUserService.getCurrentUser()
      .pipe(take(1))
      .subscribe(user => this.currentUser = user);
  }

  openNewEventModal(): void {
    const dialogRef = this.dialog.open(NewEventModalComponent);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
