import { Component, HostBinding, OnInit } from '@angular/core';
import { Cliente }  from '../../models/Cliente';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @HostBinding('class') classes ='row';
  cliente: Cliente ={
    id:0,
    nombre: '',
    apellido:'',
    direccion:'',
    cpostal:0,
    created_at: new Date()
  }
  edit: boolean = false;

  constructor( private clienteService: ClienteService, private router: Router, private activedRoute: ActivatedRoute){}

  ngOnInit(){
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.clienteService.getCliente(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.cliente = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  saveNewCliente(){
    delete this.cliente.created_at;
    delete this.cliente.id;
    this.clienteService.saveCliente(this.cliente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => console.error(err)
    )

  }
  updateCliente(){
    delete this.cliente.created_at;
    this.clienteService.updateCliente(this.cliente.id!, this.cliente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => console.log(err)

    )
  }


}
