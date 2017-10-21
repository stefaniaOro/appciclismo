import { Component, OnInit } from '@angular/core';
import {Insertrutas} from '../insertrutas';
import { RutasDataServerService } from '../rutas-data-server.service';

@Component({
  selector: 'app-anadir-rutas',
  templateUrl: './anadir-rutas.component.html',
  styleUrls: ['./anadir-rutas.component.css']
})

export class AnadirRutasComponent implements OnInit {

  public insertrutas: Insertrutas;

  kilometrosOptionsList = [
    { value: 0, label: '100' },
    { value: 1, label: '150' },
    { value: 2, label: '200' },
    { value: 2, label: '250' },
  ];


    constructor(
      private rutasDataServerService: RutasDataServerService
    ) { }

    ngOnInit() {
      this.insertrutas = new Insertrutas();
    }

    nuevaruta() {
      this.insertrutas = new Insertrutas();
    }

    saveRuta() {
      this.rutasDataServerService.saveRuta(this.insertrutas);
    }  }
