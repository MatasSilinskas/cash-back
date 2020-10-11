import {Component, OnDestroy, OnInit, Input, forwardRef} from '@angular/core';
import {FriendsService} from '../friends.service';
import {Subject} from 'rxjs';
import {IFriend} from '../friend.interface';
import {takeUntil} from 'rxjs/operators';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-friend-dropdown',
  templateUrl: './friend-dropdown.component.html',
  styleUrls: ['./friend-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FriendDropdownComponent),
      multi: true
    }
  ]
})
export class FriendDropdownComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public friends: IFriend[];
  public selectedFriend: IFriend;

  @Input()
  public placeholder = 'Select Friend';

  private destroy$ = new Subject();

  constructor(private friendService: FriendsService) {
  }

  ngOnInit(): void {
    this.friendService.getFriends()
      .pipe(takeUntil(this.destroy$))
      .subscribe(friends => {
        this.friends = friends;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChange: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(input: any): void {
    this.selectedFriend = input;
  }
}
