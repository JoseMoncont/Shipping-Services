import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { ClienteFormComponent } from './componets/client-form/client-form.component';
import { PaqueteFormComponent } from './componets/paquete-form/paquete-form.component';
import { FacturaFormComponent } from './componets/factura-form/factura-form.component';
import { ClienteListComponent } from './componets/cliente-list/cliente-list.component';
import { PaqueteListComponent } from './componets/paquete-list/paquete-list.component';
import { FacturaListComponent } from './componets/factura-list/factura-list.component';
import { ClienteService } from './services/cliente.service';
import { PaqueteService } from './services/paquete.service';
import { FacturaService } from './services/factura.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClienteFormComponent,
    PaqueteFormComponent,
    FacturaFormComponent,
    ClienteListComponent,
    PaqueteListComponent,
    FacturaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    PaqueteService,
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
