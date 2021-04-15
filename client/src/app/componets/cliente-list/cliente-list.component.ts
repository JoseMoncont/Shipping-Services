  
import { Component, HostBinding, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: any = [];
  @HostBinding('class') classes = 'row';

  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getCliente();
  }
  getCliente(){
    this.clienteService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }
  deleteCliente(id: string){
    this.clienteService.deleteCliente(id).subscribe(
      res => {
        console.log(res);
        this.getCliente();
      },
      err => console.log(err)
    )
  }

}
