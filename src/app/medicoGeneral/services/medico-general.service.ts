import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Referimiento{
  id:number;
  idAtleta:number;
  atendidoPor:string;
  referidoPor:string;
  dxMedico:string;
  fecha:string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicoGeneralService {

  constructor( private http:HttpClient) { }

  getAtletas():Observable<any[]>{
    return this.http.get<any[]>('../../assets/data/atletas.json')
  }

  addReferimiento(referimiento:any){
    return this.http.post<any>('../../assets/data/referimientos.json',referimiento)
  }
}
