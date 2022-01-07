import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/service/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
})
export class ProjetsComponent implements OnInit {

  projet = new Projet();
  projets: Projet[];

  constructor(private projetService: ProjetService) {}

  ngOnInit() {}

  getProjets(){
    this.projetService.findAll().subscribe(projects => {
      this.projets = projects;
    })
  }

  deleteProjet(id: number){
    this.projetService.delete(id).subscribe(() => {
      this.projets = this.projets.filter(projet => projet.id != id);
    })
  }

  addProjet(){
    this.projetService.create(this.projet).subscribe((prj)=>{
      this.projets = [prj, ...this.projets]
      this.projet = new Projet(); 
    })
  }

}
