import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../Service/service.service';
import { Campana } from '../interfaces/campana';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  campanas:Campana[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
     this.service.getCampana()
     .subscribe(data=>{
        this.campanas = data;
       
     });
     
  }

  Editar(campana:Campana):void{
    localStorage.setItem("id",campana.id.toString());
    this.router.navigate(["editar"])
  }

}
