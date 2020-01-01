import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../Service/service.service';
import { Carga } from '../interfaces/carga';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  cargas:Carga[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
     this.service.getCarga()
     .subscribe(data=>{
        this.cargas = data["response"]["dto"]; 
     }); 
  }

  Editar(carga:Carga):void{
    localStorage.setItem("id",carga.idparametro.toString());
    this.router.navigate(["editar"])
  }

}
