import { Component, OnInit } from '@angular/core';
import { Insertar } from '../insertar';
import { CiclistasDataServerService } from '../ciclistas-data-server.service';

@Component({
  selector: 'app-anadir-ciclista',
  templateUrl: './anadir-ciclista.component.html',
  styleUrls: ['./anadir-ciclista.component.css']
})
export class AnadirCiclistaComponent implements OnInit {

  public insertar: Insertar;
  constructor(
    private ciclistasDataServerService: CiclistasDataServerService
  )

   { }

  ngOnInit() {
    this.insertar = new Insertar();
  }

  nuevociclista() {
    this.insertar = new Insertar();
  }


  saveCiclista() {
    this.ciclistasDataServerService.saveCiclista(this.insertar);
  }
}
