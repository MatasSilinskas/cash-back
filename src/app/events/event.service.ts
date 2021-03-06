import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {IBaseEvent, IEvent} from './event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient, private config: Config) {
  }

  public getEvents(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(this.config.apiUrl + '/events');
  }

  public addEvent(event: IBaseEvent): Observable<IBaseEvent> {
    return this.httpClient.post<IBaseEvent>(this.config.apiUrl + '/events', event);
  }
}
