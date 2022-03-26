import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { DragonCreateComponent } from './crud-dragon/dragon-create/dragon-create.component';
import { DragonDetailsComponent } from './crud-dragon/dragon-details/dragon-details.component';
import { DragonUpdateComponent } from './crud-dragon/dragon-update/dragon-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adicionar',
    component: DragonCreateComponent,
  },
  {
    path: 'editar/:id',
    component: DragonUpdateComponent,
  },
  {
    path: 'details/:id',
    component: DragonDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
