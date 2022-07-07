import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terapia',
  templateUrl: './terapia.component.html',
  styleUrls: ['./terapia.component.css']
})
export class TerapiaComponent implements OnInit {

  referimientos:any=[
    {id:1, nombreReferido:'Juan',fecha:'25/2/2022',diagnostico:'Dolor de rodilla',evaluado:'Edgar Arias'},
    {id:1, nombreReferido:'Juan',fecha:'28/2/2022',diagnostico:'Dolor de Espalda', evaluado:'Luis Reinoso'},
  ]

  id:number=1

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  evaluar(id:number){  
    this._router.navigate(['/terapia-fisica/terapia-detalle',id ])

  }
    
  }


