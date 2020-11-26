import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { Destination } from 'src/app/destination';
import { Ticket } from 'src/app/ticket';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClickTravelService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> { 
    return this.http.get<Destination[]>(environment.apiBaseUrl + "destinations");
  }

  getTickets(filter): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiBaseUrl + "tickets?filter=" + filter);
  }
}