import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentTicketComponent } from 'src/app/component-ticket/component-ticket.component';

const routes: Routes = [
  { path: 'ticket/filter' , component: ComponentTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
