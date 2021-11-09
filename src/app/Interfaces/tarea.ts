import { TargetMessage } from "@angular/localize/src/utils";
import { empty } from "rxjs";
import { textChangeRangeNewSpan } from "typescript";
import { Estado } from "./estado";

export interface Tarea {
    id:number;
    titulo:string;
    estado:Estado;
}

let tareas= new Array<Tarea>() ;
let lastAvb = 0;

export function getTareas(){
    let myClonedArray= new Array<Tarea>();
    tareas.forEach(val => myClonedArray.push(Object.assign({}, val)));
    return myClonedArray;
}

export function addTarea(tarea:Tarea){
    if(tareas.length == 0){
        tarea.id = tareas.length;
        lastAvb = lastAvb + 1;
    }else{        
        tarea.id = lastAvb;
        lastAvb= lastAvb + 1;
    }
    tareas.push(tarea);
}
export function removeTarea(tarea:Tarea){ 
    console.log(tareas);
    console.log(tarea.id)
       
    for (let index = 0; index < tareas.length && tareas.length>0; index++) {
        if (tareas[index] != null && tareas[index].id == tarea.id ){
            delete tareas[index];
        }
    }
}
export function updateTarea(tarea:Tarea){
    for (let index = 0; index < tareas.length && tareas.length>0; index++) {
        if (tareas[index] != null && tareas[index].id == tarea.id){
            tareas[index]= tarea;
        }
    }
}