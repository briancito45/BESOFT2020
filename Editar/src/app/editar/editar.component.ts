import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Carga } from '../interfaces/carga';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  carga:Carga = new Carga();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  //Carga los datos y llena los campos 
  //hace una peticion get por id para obtener los datos mas recientes
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getCargaId(+id)
    .subscribe(
      data=>{
        this.carga=data;
      })
  }

  Actualizar(carga:Carga){
    //valida que existan los campos y que no tengan espacios al inicio o al final
    if((carga.frecuencia!= undefined && !(/^\s+|\s+$/.test(carga.frecuencia.toString()))) && (carga.hora!= undefined && !(/^\s+|\s+$/.test(carga.hora.toString())))) {
      this.service.updateCarga(carga)
    .subscribe(
      data=>{
        this.carga=data["response"]["dto"];
        alert("Se Actulizo con Exito!!!");
        this.router.navigate(["listar"]);
      });
    }else{
      alert("Uno de los dos campos esta vacio o tiene espacios al inicio o al final");
    }
    
  }

}
