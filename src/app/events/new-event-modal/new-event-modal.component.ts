import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EventService} from '../event.service';
import {IFriend} from '../../friends/friend.interface';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.component.html',
  styleUrls: ['./new-event-modal.component.scss']
})
export class NewEventModalComponent implements OnInit {
  public eventForm = this.formBuilder.group({
    currentUserPaid: [true],
    friend: [],
  });

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  public saveEvent(): void {
    console.log(this.eventForm.value);
  }

  public addFriend(friend: IFriend): void {
    this.eventForm.patchValue({friend});
  }
}
