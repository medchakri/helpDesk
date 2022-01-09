import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../model/ticket";
import {TicketService} from "../../service/ticket.service";
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
})
export class TicketsComponent implements OnInit {

  ticket = new Ticket();
  tickets: Ticket[] = [];
  projets: Projet[] = [];

  constructor(private TicketService: TicketService , private projectService: ProjetService) {}

  ngOnInit() {
    this.getTickets();
    this.getProjets();
  }

  getProjets(){
    this.projectService.findAll().subscribe(prj => {
      this.projets = prj;
    })
  }

  getTickets(){
    this.TicketService.findAll().subscribe(tasks => {
      this.tickets = tasks;
    })
  }

  deleteTicket(id: number){
    this.TicketService.delete(id).subscribe(() => {
      this.tickets = this.tickets.filter(ticket => ticket.id != id);
    })
  }

  addTicket(){
    this.TicketService.create(this.ticket).subscribe((tsk)=>{
      this.tickets = [tsk, ...this.tickets]
      this.ticket = new Ticket();
    })
  }

  updateCompleted(ticket: Ticket){
    this.TicketService.completed(ticket.id, ticket.completed)
      .subscribe(() => {
        ticket.completed = !ticket.completed
      })
  }

  editTache(ticket: Ticket){
    this.ticket = ticket;
    console.log(ticket);
  }

  updateTicket(){
    this.TicketService.update(this.ticket).subscribe(() => this.ticket = new Ticket());
  }

}
