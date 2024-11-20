import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'formulario-receta',
    loadChildren: () => import('./pages/formulario-receta/formulario-receta.module').then( m => m.FormularioRecetaPageModule)
  }
  // {
  //   path: 'detalles-receta-completa',
  //   loadChildren: () => import('./pages/detalles-receta-completa/detalles-receta-completa.module').then( m => m.DetallesRecetaCompletaPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
