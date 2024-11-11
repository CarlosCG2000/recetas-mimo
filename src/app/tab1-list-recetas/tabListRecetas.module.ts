import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabListRecetasPage } from './tabListRecetas.page';
import { ExploreContainerComponentModule } from '../componentes/explore-container/explore-container.module';

import { TabListRecetasRoutingModule } from './tabListRecetas-routing.module';
import { RecetaSimpleComponentModule } from "../componentes/receta-simple/receta-simple.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabListRecetasRoutingModule, // las rutas de la página
    RecetaSimpleComponentModule
    ,
    RecetaSimpleComponentModule
],
  declarations: [TabListRecetasPage] //  para las importaciones TabListRecetasPage, en fichero separado
})
export class TabListRecetasModule {}
