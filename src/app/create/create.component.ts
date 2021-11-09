import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Estado, getEstados } from '../Interfaces/estado';
import { Tarea, addTarea } from '../Interfaces/tarea';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formulario:FormGroup;
  estados:Array<Estado>;

  constructor(public FormB:FormBuilder) { 
    this.formulario = this.FormB.group({
      titulo:["",Validators.compose([Validators.required, Validators.nullValidator])],
      estado:["",Validators.compose([Validators.required, Validators.nullValidator])]
    })
    this.estados = getEstados();    
  }
 
  ngOnInit(): void {
  }

  enviar():void{
    let nombre = this.formulario.get('titulo')?.value
    let Eid = this.formulario.get('estado')?.value
    for (let index = 0; index < this.estados.length; index++) {
        if(this.estados[index].id == Eid){
          let tarea:Tarea= {id:-1,titulo:nombre,estado:this.estados[index]}
          addTarea(tarea);
          break;
        }      
    }
  }

}
