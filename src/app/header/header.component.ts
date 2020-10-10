import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../shared-services/current-user.service';
import {IUser} from '../shared-services/user.interface';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../shared-styles.scss']
})
export class HeaderComponent implements OnInit {
  public user: IUser;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.getCurrentUser()
      .pipe(take(1))
      .subscribe(user => this.user = user);
  }

}
