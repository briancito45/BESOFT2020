import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Campana } from '../interfaces/campana';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  campana:Campana = new Campana();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  //Carga los datos y llena los campos 
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getCampanaId(+id)
    .subscribe(
      data=>{
        this.campana=data;
      })
  }

  Actualizar(campana:Campana){
    this.service.updateCampana(campana)
    .subscribe(
      data=>{
        this.campana=data;
        alert("Se Actulizo con Exito!!!");
        this.router.navigate(["listar"]);
      })
  }

}
