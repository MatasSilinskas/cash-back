import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {IEvent} from '../event.interface';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit, OnDestroy {
  public events: IEvent[];

  private destroy$ = new Subject();

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe(events => this.events = events);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
