import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecetaPage } from './formulario-receta.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRecetaPageRoutingModule {}
