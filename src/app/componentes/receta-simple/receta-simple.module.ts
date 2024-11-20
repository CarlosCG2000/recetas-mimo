import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RecetaSimpleComponent } from './receta-simple.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterLink],
  declarations: [RecetaSimpleComponent],
  exports: [RecetaSimpleComponent]
})
export class RecetaSimpleComponentModule{}
