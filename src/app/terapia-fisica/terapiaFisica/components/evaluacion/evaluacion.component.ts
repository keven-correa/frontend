import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TerapiaFisicaService } from 'src/app/terapia-fisica/services/terapia-fisica.service';
import { ReferimientoService } from '../../../services/referimiento.service';

interface Atleta{
  id:number;
  nombre:string;
  apellido:string;
  disciplina:string;
  edad:number;
  sexo:string;
  fechaNacimiento:string;
  lugarNacimiento:string;
}

interface Referimiento{
  id:number;
  idAtleta:number;
  atendidoPor:string;
  referidoPor:string;
  dxMedico:string;
  fecha:string;
}

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

id:number=0
formulario!:FormGroup;
atletas:Atleta
referimiento:Referimiento


constructor(private fb:FormBuilder,
            private _ruta:ActivatedRoute,
            private _terapiaFisicaService:TerapiaFisicaService,
            private _referimientoService:ReferimientoService) {

              this.referimiento={id:0,idAtleta:0,atendidoPor:'',referidoPor:'',dxMedico:'',fecha:''}
              this.atletas={ nombre:'',edad:0,disciplina:'',apellido:'',fechaNacimiento:'',sexo:'',id:0,lugarNacimiento:''}
 }

ngOnInit(): void {
  this._ruta.params.subscribe((params:Params)=>{
    this.id=params['id'];
  });

  this.formulario=this.fb.group({
    nombre:['',Validators.required],
    edad:['',Validators.required],
    disciplina:['',Validators.required],
    apellido:['',Validators.required],
    fechaNacimiento:['',Validators.required],
    lugarNacimiento:['',Validators.required],
    sexo:['',Validators.required],
    dxMedico:['',Validators.required]
  })  

  this.cargarDatosPersonales(this.id);
  this.cargarDatosReferimiento()
}

cargarDatosPersonales(id:number){
  
  const identificador:number=this.id;
  this._terapiaFisicaService.getAtletaDetalle().subscribe(resp=>{
    for (let i = 0; i < resp.length; i++) {
      const element = resp[i];
      if(resp.find(item=>item.id==identificador)){
        this.atletas=resp.find(item=>item.id==identificador)
        console.log(this.atletas)
        return this.formulario.patchValue({
          nombre:this.atletas.nombre,
          apellido:this.atletas.apellido,
          edad:this.atletas.edad,
          fechaNacimiento:this.atletas.fechaNacimiento,
          lugarNacimiento:this.atletas.lugarNacimiento,
          disciplina:this.atletas.disciplina,
          sexo:this.atletas.sexo,
        }) 

      }      
    }

  })


}

cargarDatosReferimiento(){
  const identificador:number=this.id;
  this._referimientoService.getReferimientos().subscribe(resp=>{
    for (let i = 0; i < resp.length; i++) {
      const element = resp[i];
      if(resp.find(item=>item.idAtleta==identificador)){
        this.referimiento=resp.find(item=>item.id==identificador)
        console.log(this.referimiento)
        return this.formulario.patchValue({
          dxMedico:this.referimiento.dxMedico
        }) 

      }      
    }

  })

}

}
  
