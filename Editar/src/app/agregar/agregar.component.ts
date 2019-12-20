import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import {Campana} from '../interfaces/campana';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //se crea el objeto campana para que sea referenciado por ngModel 
  //y al enviar el fomurlario se cargen estos parametros
  campana:Campana = new Campana()  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createCampana(this.campana)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    });
  }


}
