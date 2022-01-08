import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  api = "http://localhost:3000/projets";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Projet[]>(this.api);
  }

  delete(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }

  create(projet: Projet){
    return this.http.post<Projet>(`${this.api}`, projet);
  }

  update(projet: Projet){
    return this.http.put(`${this.api}/${projet.id}`, projet.id);
  }
}
