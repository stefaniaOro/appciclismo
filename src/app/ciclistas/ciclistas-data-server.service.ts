import { Injectable } from '@angular/core';
import { Insertar } from './insertar';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CiclistasDataServerService {

  listaciclistas: Array <Insertar>;

  listaequipo = [
    { value: 1, label: 'Team Movistar' },
    { value: 2, label: 'Team Sky' },
    { value: 3, label: 'Tinkoff' },
    { value: 4, label: 'Quick Step' },
    { value: 5, label: 'BMC Racing' }
  ];

  constructor( private http: HttpClient) { }


  loadInsertar() {
    this.http.get('http://localhost:49653/insertar/GetAllInsertar')
    .subscribe(data => {
      this.listaciclistas = data as Array<Insertar>;
    });

  }


  saveCiclista(nuevociclista: Insertar) {

    this.http.post('http://localhost:49653/insertar/SaveInsertar',
    {
   'id_ciclista': `${nuevociclista.id_ciclista}`,
   'nombre_ciclista': `${nuevociclista.nombre_ciclista}`,
   'pais_ciclista': `${nuevociclista.pais_ciclista}`,
   'equipo_ciclista': `${nuevociclista.equipo_ciclista}`

  })
    .subscribe(data => {
      console.log("nombre_ciclista");
      this.loadInsertar();
    });
  }
}
