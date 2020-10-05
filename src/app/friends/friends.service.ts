import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {IFriend} from './friend.interface';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient: HttpClient, private config: Config) {
  }

  public getFriends(): Observable<IFriend[]> {
    return this.httpClient.get<IFriend[]>(this.config.apiUrl + '/friends');
  }
}
