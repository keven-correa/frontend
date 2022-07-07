import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-atleta',
  templateUrl: './editar-atleta.component.html',
  styleUrls: ['./editar-atleta.component.css']
})
export class EditarAtletaComponent implements OnInit {
  id!:number;
  constructor( private _ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this._ruta.params.subscribe(resp=>{
      this.id=resp['id'];
      console.log(this.id)
    })
  }

}
