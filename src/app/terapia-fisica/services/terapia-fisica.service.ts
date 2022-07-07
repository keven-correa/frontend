import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerapiaFisicaService {

  constructor(private _http:HttpClient) { }

  getAtletas():Observable<any[]>{
    return this._http.get<any[]>('../../assets/data/atletas.json')
  }

  getAtletaDetalle():Observable<any[]>{
    return this._http.get<any[]>('../../assets/data/atletas.json')
  }
}
