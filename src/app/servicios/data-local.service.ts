import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componentes';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private http:HttpClient) { }

  leerMenuOpts(){
    return this.http.get<Componente[]>('./assets/menu-opts.json');
  }
}
