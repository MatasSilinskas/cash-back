import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendDropdownComponent } from './friend-dropdown/friend-dropdown.component';

@NgModule({
  declarations: [FriendDropdownComponent],
  exports: [
    FriendDropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
