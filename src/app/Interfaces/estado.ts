import { getSyntheticLeadingComments } from "typescript";

export interface Estado {
    id:number;
    estado:string;
    color:string;
}
export let estados = [
    {id:0, estado:"Iniciada", color:"red"},
    {id:1, estado:"En Proceso", color:"yellow"},
    {id:2, estado:"Terminada", color:"green"}
];

export function getEstados(){
    let myClonedArray= new Array<Estado>();
    estados.forEach(val => myClonedArray.push(Object.assign({}, val)));
    return myClonedArray;
}