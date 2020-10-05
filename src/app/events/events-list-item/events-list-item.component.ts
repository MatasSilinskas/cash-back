import {Component, OnInit, Input} from '@angular/core';
import {IEvent} from '../event.interface';
import {CurrentUserService} from '../../shared-services/current-user.service';

@Component({
  selector: 'app-events-list-item',
  templateUrl: './events-list-item.component.html',
  styleUrls: ['./events-list-item.component.scss']
})
export class EventsListItemComponent implements OnInit {
  @Input()
  public event: IEvent;

  private currentUserId: number;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.getCurrentUser().subscribe(user => this.currentUserId = user.id);
  }

  public isCurrentUserPayer(): boolean {
    return this.currentUserId === this.event.payer.id;
  }
}
