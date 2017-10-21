import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insertrutas } from '../rutas/insertrutas';


@Injectable()
export class RutasDataServerService {

  listarutas: Array <Insertrutas>;

  kilometrosOptionsList = [
    { value: 0, label: '100' },
    { value: 1, label: '150' },
    { value: 2, label: '200' },
    { value: 2, label: '250' },
  ];

  constructor( private http: HttpClient) { }


  loadInsertrutas() {
    this.http.get('http://localhost:49653/insertrutas/GetAllInsertrutas')
    .subscribe(data => {
      this.listarutas = data as Array<Insertrutas>;
    });

}

saveRuta(nuevaruta: Insertrutas) {

      this.http.post('http://localhost:49653/insertrutas/SaveInsertrutas',
  {
      'id_ruta': `${nuevaruta.id_ruta}`,
      'nombre_ruta': `${nuevaruta.nombre_ruta}`,
      'pais_ruta': `${nuevaruta.pais_ruta}`,
      'ciudad_ruta': `${nuevaruta.ciudad_ruta}`,
      'descripcion': `${nuevaruta.descripcion}`,
      'kilometros': `${nuevaruta.kilometros}`,

    })
      .subscribe(data => {
        this.loadInsertrutas();
      });
    }

  }
