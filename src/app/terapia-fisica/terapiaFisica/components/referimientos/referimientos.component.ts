import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { ReferimientoService } from 'src/app/terapia-fisica/services/referimiento.service';

interface Atleta {
  id: number;
  nombre: string;
  apellido: string;
  disciplina: string;
  edad: number;
  sexo: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
}

interface Referimiento {
  id: number;
  idAtleta: number;
  atendidoPor: string;
  referidoPor: string;
  dxMedico: string;
  fecha: string;
}

@Component({
  selector: 'app-referimientos',
  templateUrl: './referimientos.component.html',
  styleUrls: ['./referimientos.component.css']
})
export class ReferimientosComponent implements OnInit {

  referimientos: Referimiento[] = [];
  atletas: any[] = []
  atletasReferidos: any;
  respReferidos: any;
  respAtletas: any;
  detalleAtletasReferidos:any;

  constructor(private _router: Router,
    private referimirntoService: ReferimientoService) {
    this.atletasReferidos = []
    // this.detalleAtletasReferidos={id:0,nombre:'',apellido:'',disciplina:'',edad:0,sexo:'',fechaNacimiento:'',lugarNacimiento:''}
  }

  ngOnInit(): void {
    this.getAtletas();
    this.getReferimientos();
    this.getAtletasReferidos();
    this.getDetallesAtletasReferidos();

  }

  evaluar(id: number) {
    this._router.navigate(['/terapia-fisica/evaluacion', id])

  }

  getReferimientos() {

    this.referimirntoService.getReferimientos().subscribe(resp => {
      this.referimientos = resp;

    })


  }

  getAtletas() {
    this.referimirntoService.getAtletas().subscribe(resp => {
      this.atletas = resp

    });

  }

  getAtletasReferidos() {
    this.referimirntoService.getReferimientos().subscribe(resp => {

      for (let i = 0; i < resp.length; i++) {
        if (resp[i].idAtleta !== 0) {
          this.atletasReferidos.push(resp[i])
        }
      }
      console.log(this.atletasReferidos)

    })
  }

  getDetallesAtletasReferidos() {
    
    this.referimirntoService.filtrar(this.atletasReferidos,this.atletas)
    
  }

  
}





