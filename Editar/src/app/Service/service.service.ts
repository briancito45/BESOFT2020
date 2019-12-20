import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Campana } from '../interfaces/campana';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url="https://jsonplaceholder.typicode.com/posts";
  
  getCampana(){
    return this.http.get<Campana[]>(this.Url);
  }
  createCampana(campana:Campana){
    return this.http.post<Campana>(this.Url,Campana);
  }
  getCampanaId(id:Number){
    
    
    return this.http.get<Campana>(this.Url+"/"+id);
  }
  updateCampana(campana:Campana){
    return this.http.put<Campana>(this.Url+"/"+campana.id,campana);
  }

}
