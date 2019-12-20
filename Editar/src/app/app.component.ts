import { Component } from '@angular/core';
import { Router } from '@angular/router';

/*import {ServiceService} from './Service/service.service';
import { Campana } from './interfaces/campana';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Editar';

  //campanas:Campana[];

  //constructor(private service:ServiceService, private router:Router){}
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Agregar(){
    this.router.navigate(["agregar"]);
  }
  /*Editar(){
    this.router.navigate(["editar"]);
  }*/

  /*ngOnInit() {
    this.service.getCampana()
    .subscribe(data=>{
       this.campanas = data;
      console.log(this.campanas)
    });
    
 }*/
}
