import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
    friend: ['', Validators.required],
    comment: [],
    date: ['', Validators.required],
    debt: ['', [Validators.required, Validators.pattern(/^\d+([.]\d{1,2})?$/)]],
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
      debtAmount: this.getAmountValue(this.eventForm.value.debt),
      date: this.eventForm.value.date,
      comment: this.eventForm.value.comment,
    };

    this.eventService.addEvent(postEvent).subscribe(value => console.log(value));
  }

  public addFriend(friend: IFriend): void {
    this.eventForm.patchValue({friend});
  }

  private getAmountValue(value: string): string {
    const splittedValue = value.split('.');
    let cents = splittedValue[1] ?? '00';

    while (cents.length < 2) {
      cents += '0';
    }

    return splittedValue[0] + cents;
  }
}
