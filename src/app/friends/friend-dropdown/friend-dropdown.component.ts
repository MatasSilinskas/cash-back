import {Component, OnDestroy, OnInit} from '@angular/core';
import {FriendsService} from '../friends.service';
import {Subject} from 'rxjs';
import {IFriend} from '../friend.interface';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-friend-dropdown',
  templateUrl: './friend-dropdown.component.html',
  styleUrls: ['./friend-dropdown.component.scss']
})
export class FriendDropdownComponent implements OnInit, OnDestroy {
  public friends: IFriend[];

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
}
