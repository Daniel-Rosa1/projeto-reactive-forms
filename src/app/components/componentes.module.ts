import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListCardComponent } from './user-list-card/user-list-card.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserListCardComponent
  ],
  imports: [
    AngularMaterialModule,
    PipesModule
  ],
  exports: [
    UsersListComponent,
  ]
})
export class ComponentesModule { }
