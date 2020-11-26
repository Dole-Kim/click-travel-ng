import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../../app/click-travel.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
import { Ticket } from '../ticket';

@Component({
  selector: 'app-component-ticket',
  templateUrl: './component-ticket.component.html',
  styleUrls: ['./component-ticket.component.scss']
})
export class ComponentTicketComponent implements OnInit {

  public tickets : Ticket[];
  public filter : any;

  constructor(private clicktravel: ClickTravelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filter = { "where": { "to": + this.route.snapshot.paramMap.get("filter") } };
    this.clicktravel.getTickets(this.filter).subscribe(
      (tickets : Ticket[]) => {
        this.tickets = tickets;
      }
    )
  }

}

