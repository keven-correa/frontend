import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


export interface atletaInterface {
  id: number;
  nombre: string;
  apellido: string;
  disciplina: string;
  sexo:string;
}

const ELEMENT_DATA: atletaInterface[] = [
  {id: 1, nombre: 'Antonio', apellido:'Guzman' , disciplina: 'Boxeo', sexo:'M'},
  {id: 2, nombre: 'Manuel', apellido: 'Gonzalez' , disciplina: 'Basketball', sexo:'M'},
  {id: 3, nombre: 'Juana', apellido: 'Castillo', disciplina: 'Baseball', sexo:'F'},
  {id: 4, nombre: 'Saldy', apellido:'Amparo' , disciplina: 'Voleibol', sexo:'F'},
  {id: 5, nombre: 'Nicol', apellido: 'Borbon' , disciplina: 'Atletismo', sexo:'F'},
  {id: 6, nombre: 'Keven', apellido: 'Correa', disciplina: 'Natacion', sexo:'M'},
  {id: 7, nombre: 'Edgar', apellido: 'Mena', disciplina: 'Natacion', sexo:'M'},
  {id: 8, nombre: 'Julia', apellido: 'Ruiz', disciplina: 'Boxeo', sexo:'F'},
  {id: 9, nombre: 'Joan', apellido:'Sena' , disciplina: 'Judo', sexo:'M'},
  {id: 10, nombre: 'Daniel', apellido: 'Perez', disciplina: 'Boxeo', sexo:'M'},
  
];

@Component({
  selector: 'app-consulta-detalle',
  templateUrl: './consulta-detalle.component.html',
  styleUrls: ['./consulta-detalle.component.css']
})
export class ConsultaDetalleComponent implements OnInit {

  // atleta!:{nombre:string, id:number,apellido:string,disciplina:string,sexo:string}
  id:number=0;  

  constructor(private _ruta:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this._ruta.params.subscribe((params:Params)=>{
      this.id=params['id'];
      console.log(this.id)
    })
    
  }
    
  }


