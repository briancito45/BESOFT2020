import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import {Carga} from '../interfaces/carga';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //se crea el objeto carga para que sea referenciado por ngModel 
  //y al enviar el fomurlario se cargen estos parametros
  carga:Carga = new Carga()  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    
    if((this.carga.frecuencia!= undefined && !(/^\s+|\s+$/.test(this.carga.frecuencia.toString()))) && (this.carga.hora!= undefined && !(/^\s+|\s+$/.test(this.carga.hora.toString())))) {
      this.service.createCarga(this.carga)
        .subscribe(data=>{
          alert("Se agrego con Exito...!!!");
          this.router.navigate(["listar"]);
        });
    }else{
      alert("Uno de los dos campos esta vacio o tiene espacios al inicio o al final");
    }
    
  }


}
