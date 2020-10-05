import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FriendDropdownComponent} from './friend-dropdown/friend-dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import {SharedServicesModule} from '../shared-services/shared-services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FriendDropdownComponent],
  exports: [
    FriendDropdownComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    SharedServicesModule,
    BrowserAnimationsModule
  ]
})
export class FriendsModule {
}
