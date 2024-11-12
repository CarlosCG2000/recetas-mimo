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
        loadChildren: () => import('../tab1-list-recetas/tabListRecetas.module').then(m => m.TabListRecetasModule)
      },
      {
        path: 'recetas-favoritas',
        loadChildren: () => import('../tab2-recetas-favoritas/tab2-recetas-favoritas.module').then(m => m.Tab2RecetasFavoritasPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
