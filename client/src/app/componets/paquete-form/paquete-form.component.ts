import { Component, HostBinding, OnInit } from '@angular/core';
import { Paquete }  from '../../models/Paquete';
import { ActivatedRoute, Router } from '@angular/router';

import { PaqueteService } from '../../services/paquete.service';


@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  @HostBinding('class') classes ='row';
  paquete: Paquete ={
    id:0,
    nombre: '',
    precio:0,
    created_at: new Date()
  }
  edit: boolean = false;

  constructor( private paqueteService: PaqueteService, private router: Router, private activedRoute: ActivatedRoute){}

  ngOnInit(){
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.paqueteService.getPaquete(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.paquete = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  saveNewPaquete(){
    delete this.paquete.created_at;
    delete this.paquete.id;
    this.paqueteService.savePaquete(this.paquete)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/paquetes']);
      },
      err => console.error(err)
    )

  }
  updatePaquete(){
    delete this.paquete.created_at;
    this.paqueteService.updatePaquete(this.paquete.id!, this.paquete)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/paquetes']);
      },
      err => console.log(err)

    )
  }


}