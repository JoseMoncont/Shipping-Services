  
import { Component, HostBinding, OnInit } from '@angular/core';
import { PaqueteService } from '../../services/paquete.service';

@Component({
  selector: 'app-paquete-list',
  templateUrl: './paquete-list.component.html',
  styleUrls: ['./paquete-list.component.css']
})
export class PaqueteListComponent implements OnInit {
  paquetes: any = [];
  @HostBinding('class') classes = 'row';

  constructor( private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    this.getPaquete();
  }
  getPaquete(){
    this.paqueteService.getPaquetes().subscribe(
      res => {
        this.paquetes = res;
      },
      err => console.error(err)
    );
  }
  deletePaquete(id: string){
    this.paqueteService.deletePaquete(id).subscribe(
      res => {
        console.log(res);
        this.getPaquete();
      },
      err => console.log(err)
    )
  }

}
