import { Component, OnInit } from '@angular/core';
import { Insertrutas } from '../insertrutas';
import { RutasDataServerService } from '../rutas-data-server.service';



@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {

  constructor(
    private rutasDataServerService: RutasDataServerService
  )      { }

  ngOnInit() {

    this.rutasDataServerService.loadInsertrutas();
  }
}
