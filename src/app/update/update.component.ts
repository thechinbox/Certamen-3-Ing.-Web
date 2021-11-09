import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Estado, getEstados } from '../Interfaces/estado';
import { Tarea, getTareas, updateTarea } from '../Interfaces/tarea';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formulario:FormGroup;
  estados:Array<Estado>;
  id:any;
  titulo:any;
  estado:any;

  constructor(public FormB:FormBuilder, router:ActivatedRoute) { 
    this.formulario = this.FormB.group({
      titulo:["",Validators.compose([Validators.required, Validators.nullValidator])],
      estado:["",Validators.compose([Validators.required, Validators.nullValidator])]
    })
    this.estados = getEstados();
    router.params.subscribe(datos=>{
      this.id = datos["id"]; 
    })
    let tareas = getTareas();
    for (let index = 0; index < tareas.length; index++) {
      if(tareas[index].id == this.id){
        this.titulo = tareas[index].titulo
        this.estado = tareas[index].estado
      }      
    }
  }

  ngOnInit(): void {
  }

  update():void{
    let nombre = this.formulario.get('titulo')?.value
    let Eid = this.formulario.get('estado')?.value
    for (let index = 0; index < this.estados.length; index++) {
      if(this.estados[index].id == Eid){
        updateTarea({id:this.id,titulo:nombre,estado:this.estados[index]});
        break;
      }      
  }
  }
}
