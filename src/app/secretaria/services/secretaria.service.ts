import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {

  constructor(private http:HttpClient) { }

  getAtletas():Observable<any[]>{
    return this.http.get<any[]>('../../assets/data/atletas.json')
  }
}
