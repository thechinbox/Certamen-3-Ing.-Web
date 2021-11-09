import { getSyntheticLeadingComments } from "typescript";

export interface Estado {
    id:number;
    estado:string;
    color:string;
    editable:boolean;
}
export let estados = [
    {id:0, estado:"Iniciada", color:"red", editable:true},
    {id:1, estado:"En Proceso", color:"yellow", editable:false},
    {id:2, estado:"Terminada", color:"green", editable:false}
];

export function getEstados(){
    let myClonedArray= new Array<Estado>();
    estados.forEach(val => myClonedArray.push(Object.assign({}, val)));
    return myClonedArray;
}