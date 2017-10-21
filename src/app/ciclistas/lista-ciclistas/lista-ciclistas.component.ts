import { Component, OnInit } from '@angular/core';
import { Insertar } from '../insertar';
import { CiclistasDataServerService } from '../ciclistas-data-server.service';


@Component({
  selector: 'app-lista-ciclistas',
  templateUrl: './lista-ciclistas.component.html',
  styleUrls: ['./lista-ciclistas.component.css']
})
export class ListaCiclistasComponent implements OnInit {

  constructor(
    private ciclistasDataService: CiclistasDataServerService
  ) { }

  ngOnInit() {
    this.ciclistasDataService.loadInsertar();
    console.log(this.ciclistasDataService.listaciclistas);
  }
}
