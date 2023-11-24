import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componentes';
import { DataLocalService } from '../../servicios/data-local.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  
  componentes: Observable<Componente[]>;

  constructor(private ctrControler: MenuController,
    private data: DataLocalService) { }


  ngOnInit() {
    this.componentes=this.data.leerMenuOpts();
  }

  mostrarMenu() {
    this.ctrControler.open('first');
  }

}
