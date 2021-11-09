import { Component, OnInit } from '@angular/core';
import { Tarea, getTareas, removeTarea } from '../Interfaces/tarea';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tareasT:Array<Tarea>;
  tareasP:Array<Tarea>;
  tareasI:Array<Tarea>;
  router:Router;

  constructor(private rt:Router) { 
    console.log(getTareas());
    this.tareasT = new Array();
    this.tareasP = new Array();
    this.tareasI = new Array();
    let tareas:Array<Tarea> = getTareas(); 
    for (let index = 0; index < tareas.length && tareas.length > 0; index++) {
      if(tareas[index].estado.id == 0){
        this.tareasI.push(tareas[index])
      }else if (tareas[index].estado.id == 1){
        this.tareasP.push(tareas[index])
      }else{
        this.tareasT.push(tareas[index])
      }

    }
    this.router=rt;
  }

  ngOnInit(): void {
    
  }
  
  borrar(tarea:Tarea){
    removeTarea(tarea);
    this.router.navigate(['create']);
  }


}
