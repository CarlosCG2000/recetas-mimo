import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2RecetasFavoritasPage } from './tab2-recetas-favoritas.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2RecetasFavoritasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2RecetasFavoritasPageRoutingModule {}
