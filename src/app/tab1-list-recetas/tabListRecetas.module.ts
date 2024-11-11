import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabListRecetasPage } from './tabListRecetas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabListRecetasRoutingModule } from './tabListRecetas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabListRecetasRoutingModule // las rutas de la página
  ],
  declarations: [TabListRecetasPage] //  para las importaciones TabListRecetasPage, en fichero separado
})
export class TabListRecetasModule {}
