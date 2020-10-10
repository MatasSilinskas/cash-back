import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EventService} from '../event.service';
import {IFriend} from '../../friends/friend.interface';
import {IBaseEvent} from '../event.interface';
import {CurrentUserService} from '../../shared-services/current-user.service';
import {IUser} from '../../shared-services/user.interface';
import {take} from 'rxjs/operators';

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
    debt: [],
  });

  private currentUser: IUser;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private currentUserService: CurrentUserService
  ) {
  }

  ngOnInit(): void {
    this.eventForm.get('currentUserPaid').valueChanges.subscribe(
      value => this.friendDropdownPlaceholder = value
        ? 'Select a friend who paid'
        : 'Select a friend who paid for you'
    );

    this.currentUserService.getCurrentUser()
      .pipe(take(1))
      .subscribe(user => this.currentUser = user);
  }

  public saveEvent(): void {
    const formFriend = this.eventForm.value.friend;
    const currentUserPaid = this.eventForm.value.currentUserPaid;
    const friend: IUser = {...formFriend, id: formFriend.userId};

    const postEvent: IBaseEvent = {
      payee: !currentUserPaid ? this.currentUser : friend,
      payer: currentUserPaid ? this.currentUser : friend,
      debtAmount: this.eventForm.value.debt,
      date: this.eventForm.value.date,
      comment: this.eventForm.value.comment,
    };

    this.eventService.addEvent(postEvent).subscribe(value => console.log(value));
  }

  public addFriend(friend: IFriend): void {
    this.eventForm.patchValue({friend});
  }
}
