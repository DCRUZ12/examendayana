import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/componentes';
import { DataLocalService } from './servicios/data-local.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private data:DataLocalService) {}
  
  componentes:Observable<Componente[]>;
  
  ngOnInit(): void {
    this.componentes=this.data.leerMenuOpts();
  }

}
