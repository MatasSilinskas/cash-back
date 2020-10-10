import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EventService} from '../event.service';
import {IFriend} from '../../friends/friend.interface';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.component.html',
  styleUrls: ['./new-event-modal.component.scss', '../../shared-styles.scss']
})
export class NewEventModalComponent implements OnInit {
  public friendDropdownPlaceholder = 'Select friend who paid';

  public eventForm = this.formBuilder.group({
    currentUserPaid: [true],
    friend: [],
    comment: [],
    date: [],
  });

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventForm.get('currentUserPaid').valueChanges.subscribe(
      value => this.friendDropdownPlaceholder = value
        ? 'Select a friend who paid'
        : 'Select a friend who paid for you'
    );
  }

  public saveEvent(): void {
    console.log(this.eventForm.value);
  }

  public addFriend(friend: IFriend): void {
    this.eventForm.patchValue({friend});
  }

  public changePlaceholder(): void {
  }

}
