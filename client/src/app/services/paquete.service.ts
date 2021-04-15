import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Paquete } from '../models/Paquete';



@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getPaquetes(){
    return this.http.get(`${this.API_URI}/paquetes`);
  }
  getPaquete(id: string){
    return this.http.get(`${this.API_URI}/paquetes/${id}`);
  }
  savePaquete(paquetes: Paquete){
    return this.http.post(`${this.API_URI}/paquetes/`, paquetes);
  }
  deletePaquete(id: string){
    return this.http.delete(`${this.API_URI}/paquetes/${id}`);
  }
  updatePaquete(id: number|string, updatedPaquete: Paquete){
    return this.http.put(`${this.API_URI}/paquetes/${id}`, updatedPaquete);
  }
}