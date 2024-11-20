import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesRecetaCompletaPage } from './detalles-receta-completa.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesRecetaCompletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesRecetaCompletaPageRoutingModule {}
