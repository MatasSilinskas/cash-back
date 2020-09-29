import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {EventInterface} from './event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient, private config: Config) {
  }

  public getEvents(): Observable<EventInterface[]> {
    return this.httpClient.get<EventInterface[]>(this.config.apiUrl + '/events');
  }
}
