import {Component, OnInit, Input} from '@angular/core';
import {EventInterface} from '../event.interface';

@Component({
  selector: 'app-events-list-item',
  templateUrl: './events-list-item.component.html',
  styleUrls: ['./events-list-item.component.scss']
})
export class EventsListItemComponent implements OnInit {
  @Input()
  public event: EventInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
