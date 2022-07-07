import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  nombres:string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nombres: 'Edgar', fecha:'25-2-2021'},

];
@Component({
  selector: 'app-terapia-detalle',
  templateUrl: './terapia-detalle.component.html',
  styleUrls: ['./terapia-detalle.component.css']
})
export class TerapiaDetalleComponent implements OnInit {

  formulario!:FormGroup;
  // terapias:any[]=[
  //   {nombre:'edgar',fecha:'22-5-2022'}
  // ];
  
  constructor(private fb:FormBuilder) {
    
   }
  
  ngOnInit(): void {
    this.formulario=this.fb.group({
      nombres:['',Validators.required],
      fecha:['',Validators.required],
    })
  }
  
  // guardar(){
  
  //   this.terapias.push(this.formulario.value);
  //   console.log(this.terapias)
  //   this.terapias=this.terapias;
  // }
  
  
    // displayedColumns: string[] = ['nombre','fecha'];

    
      displayedColumns: string[] = ['numero', 'nombres', 'fecha'];
      dataSource = [...ELEMENT_DATA];
    
      @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
    
      guardar() {
        this.dataSource.push(this.formulario.value);
        console.log(this.dataSource)
        this.table.renderRows();
      }
    

    }


