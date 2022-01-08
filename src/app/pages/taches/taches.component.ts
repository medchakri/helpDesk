import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { Tache } from 'src/app/model/tache';
import { ProjetService } from 'src/app/service/projet.service';
import { TacheService } from 'src/app/service/tache.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
})
export class TachesComponent implements OnInit {

  tache = new Tache();
  taches: Tache[] = [];
  projets: Projet[] = []

  constructor(private TacheService: TacheService, private projectService: ProjetService) {}

  ngOnInit() {
    this.getTaches();
    this.getProjets();
  }

  getProjets(){
    this.projectService.findAll().subscribe(prj => {
      this.projets = prj;
    })
  }

  getTaches(){
    this.TacheService.findAll().subscribe(tasks => {
      this.taches = tasks;
    })
  }

  deleteTache(id: number){
    this.TacheService.delete(id).subscribe(() => {
      this.taches = this.taches.filter(tache => tache.id != id);
    })
  }

  addTache(){
    this.TacheService.create(this.tache).subscribe((tsk)=>{
      this.taches = [tsk, ...this.taches]
      this.tache = new Tache(); 
    })
  }
  
  updateCompleted(task: Tache){
    this.TacheService.completed(task.id, task.completed)
        .subscribe(() => {
          task.completed = !task.completed
        })
  }

  editTache(task: Tache){
    this.tache = task;
    console.log(task);
  }

  updateTache(){
    this.TacheService.update(this.tache).subscribe(() => this.tache = new Tache());
  }

}
