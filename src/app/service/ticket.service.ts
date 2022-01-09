import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../model/tache';
import {Ticket} from "../model/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  api = "http://localhost:3000/tickets";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Ticket[]>(this.api);
  }

  delete(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }

  create(ticket: Ticket){
    return this.http.post<Ticket>(`${this.api}`, ticket);
  }

  completed(id: any, completed: any){
    return this.http.patch(`${this.api}/${id}`, {completed: !completed})
  }

  update(ticket: Ticket){
    return this.http.put(`${this.api}/${ticket.id}`, ticket.id);
  }
}
