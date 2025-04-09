import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    PipesModule
  ],
  exports: []
})
export class ComponentesModule { }
