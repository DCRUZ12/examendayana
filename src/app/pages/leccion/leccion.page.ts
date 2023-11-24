import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.page.html',
  styleUrls: ['./leccion.page.scss'],
})
export class LeccionPage implements OnInit {

  constructor() { }

  array:any[]=Array(8);

  ngOnInit() {
  }

}
