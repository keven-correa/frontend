import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:any;

  constructor(private httpclient:HttpClient) { }

  getUsuario():Observable<any[]>{
    
   return this.httpclient.get<any[]>('../../assets/data/usuarios.json');
   
    
  }
}
