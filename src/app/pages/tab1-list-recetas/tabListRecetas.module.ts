import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabListRecetasPage } from './tabListRecetas.page';

import { TabListRecetasRoutingModule } from './tabListRecetas-routing.module';
import { RecetaSimpleComponentModule } from '../../componentes/receta-simple/receta-simple.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabListRecetasRoutingModule, // las rutas de la página
    RecetaSimpleComponentModule,
    ReactiveFormsModule
],
  declarations: [TabListRecetasPage] //  para las importaciones TabListRecetasPage, en fichero separado
})
export class TabListRecetasModule {}
