import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CurrentUserInterface} from './current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() {
  }

  public getCurrentUser(): Observable<CurrentUserInterface> {
    return of<CurrentUserInterface>({
      id: 1,
      firstName: 'Joe',
      lastName: 'Durham'
    });
  }
}
