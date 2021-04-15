import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './componets/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './componets/client-form/client-form.component';
import { PaqueteListComponent } from './componets/paquete-list/paquete-list.component';
import { PaqueteFormComponent } from './componets/paquete-form/paquete-form.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'clientes',
  pathMatch: 'full'
},
{
  path: 'clientes',
  component: ClienteListComponent
},
{
  path: 'clientes/add',
  component: ClienteFormComponent
},
{
 path: 'clientes/edit/:id',
 component: ClienteFormComponent
},
{
  path: '',
  redirectTo: 'paquetes',
  pathMatch: 'full'
},
{
  path: 'paquetes',
  component: PaqueteListComponent
},
{
  path: 'paquetes/add',
  component: PaqueteFormComponent
},
{
 path: 'paquetes/edit/:id',
 component: PaqueteFormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }