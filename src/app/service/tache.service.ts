import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../model/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  api = "http://localhost:3000/taches";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Tache[]>(this.api);
  }

  delete(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }

  create(tache: Tache){
    return this.http.post<Tache>(`${this.api}`, tache);
  }

  completed(id: any, completed: any){
    return this.http.patch(`${this.api}/${id}`, {completed: !completed})
  }

  update(tache: Tache){
    return this.http.put(`${this.api}/${tache.id}`, tache.id);
  }
}
