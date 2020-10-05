import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {IEvent} from '../event.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  public events: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }
}
