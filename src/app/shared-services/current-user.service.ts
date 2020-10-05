import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IUser} from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() {
  }

  public getCurrentUser(): Observable<IUser> {
    return of<IUser>({
      id: 1,
      firstName: 'Joe',
      lastName: 'Durham'
    });
  }
}
