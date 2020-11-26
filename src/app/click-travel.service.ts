import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { Destination } from 'src/app/destination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClickTravelService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> { 
    return this.http.get(environment.apiBaseUrl + "destinations").pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => Destination.fromJson(jsonItem))
      )
    );
  }
}
