import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Carga } from '../interfaces/carga';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  //Url="https://jsonplaceholder.typicode.com/posts";
  //Url="https://localhost/proyec_mese/views/ajax/ingreso_ajax.php?ingreso=10";
  Url="http://localhost:8080/parametros";
  getCarga(){
    return this.http.get<Carga[]>(this.Url);
  }
  createCarga(carga:Carga){
    return this.http.post<Carga>(this.Url,carga);
  }
  getCargaId(id:Number){
    return this.http.get<Carga>(this.Url+"/"+id);
  }
  updateCarga(carga:Carga){
    return this.http.put<Carga>(this.Url+"/"+carga.idparametro,carga);
  }

}
