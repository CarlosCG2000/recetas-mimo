import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabListRecetasPage } from './tabListRecetas.page';

const routes: Routes = [
  {
    path: '',
    component: TabListRecetasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabListRecetasRoutingModule {}
