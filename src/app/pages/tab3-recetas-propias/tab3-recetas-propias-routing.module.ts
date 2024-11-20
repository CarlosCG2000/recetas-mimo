import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3RecetasPropiasPage } from './tab3-recetas-propias.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3RecetasPropiasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3RecetasPropiasPageRoutingModule {}
