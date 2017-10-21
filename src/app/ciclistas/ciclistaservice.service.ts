import { Injectable } from '@angular/core';
import { Insertar } from './insertar';


@Injectable()
export class Ciclistaservice {

  listaciclistas: Array<Insertar>;
  constructor() { }

  private iniciaListaCiclista() {
    this.listaciclistas = [
      {
        id_ciclista: 123,
        nombre_ciclista: 'chavez',
        pais_ciclista: 'Venezuela',
        equipo_ciclista: 'Skype'
      },
      {
        id_ciclista: 123,
        nombre_ciclista: 'chavez',
        pais_ciclista: 'Venezuela',
        equipo_ciclista: 'Skype'
      },

    ];
  }

  loadInsertar() {
    this.iniciaListaCiclista();
  }
  saveCiclista(nuevoCiclista: Insertar) {
    this.listaciclistas.push(nuevoCiclista);
  }

}
