import { Component } from '@angular/core';
import { ClickTravelService } from '../app/click-travel.service';
import { Destination } from './destination';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';

  public destinations : Destination[];

  constructor(private clicktravel: ClickTravelService) {};

  ngOnInit(): void {
    this.clicktravel.getDestinations().pipe(
      map(
        (destinations : Destination[]) => destinations.filter(
          (destination : Destination) => destination.isDreamDestination === true
        )
      )
    ).subscribe(
      (destinations: Destination[]) => {
        this.destinations = destinations;
      }
    );
  }


}


