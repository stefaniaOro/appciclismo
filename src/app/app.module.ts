import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CiclistasModule } from './ciclistas/ciclistas.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './ciclistas/index/index.component';
import { IndexrutasComponent } from './rutas/indexrutas/indexrutas.component';
import {  IndexcontactenosComponent} from './contactenos/indexcontactenos/indexcontactenos.component';
import {TablaPosicionesComponent} from './tabla-posiciones/tabla-posiciones.component';
import { IndextablaComponent } from './tabla-posiciones/indextabla/indextabla.component';
import { RutasModule } from './rutas/rutas.module';
import {AnadirCiclistaComponent} from './ciclistas/anadir-ciclista/anadir-ciclista.component';
import {ListaCiclistasComponent} from './ciclistas/lista-ciclistas/lista-ciclistas.component';
import { AnadirRutasComponent } from './rutas/anadir-rutas/anadir-rutas.component';
import {ListaRutasComponent} from './rutas/lista-rutas/lista-rutas.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import {ContactenosComponent} from './contactenos/contactenos.component';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,

} from '@angular/material';
import { MenucontactenosComponent } from './menucontactenos/menucontactenos.component';




const appRoutes: Routes = [
  { path: 'ciclistas/index', component: IndexComponent },
  { path: 'rutas/indexrutas', component: IndexrutasComponent},
  { path: 'contactenos/indexcontactenos', component: IndexcontactenosComponent},
  { path: 'tabla-posiciones/indextabla', component: IndextablaComponent
},

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent,
    ContactenosComponent,
    TablaPosicionesComponent,
    IndexcontactenosComponent,
    IndextablaComponent,
    MenucontactenosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CiclistasModule,
    RutasModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
       RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
