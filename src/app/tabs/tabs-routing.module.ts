import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'listado-recetas',
        loadChildren: () => import('../pages/tab1-list-recetas/tabListRecetas.module').then(m => m.TabListRecetasModule)
      },
      {
        path: 'recetas-favoritas',
        loadChildren: () => import('../pages/tab2-recetas-favoritas/tab2-recetas-favoritas.module').then(m => m.Tab2RecetasFavoritasPageModule)
      },
      {
        path: 'recetas-propias',
        loadChildren: () => import('../pages/tab3-recetas-propias/tab3-recetas-propias.module').then(m => m.Tab3RecetasPropiasPageModule)
      },
      {
        path: '',
        redirectTo: 'listado-recetas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'listado-recetas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
