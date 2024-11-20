import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabListRecetasPage } from './tabListRecetas.page';

const routes: Routes = [
  {
    path: '',
    component: TabListRecetasPage,
  },
  {
    path: 'receta-completa/:id',
    loadChildren: () => import('../../pages/detalles-receta-completa/detalles-receta-completa.module').then(m => m.DetallesRecetaCompletaPageModule)
  },
  {
    path: '',
    redirectTo: 'listado-recetas',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabListRecetasRoutingModule {}
