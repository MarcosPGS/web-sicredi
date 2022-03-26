import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

//Componentes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './crud-dragon/dragon-list/dragon-list.component';
import { DragonCreateComponent } from './crud-dragon/dragon-create/dragon-create.component';
import { DragonDetailsComponent } from './crud-dragon/dragon-details/dragon-details.component';
import { DragonUpdateComponent } from './crud-dragon/dragon-update/dragon-update.component';

//Modulos

//Services
import { DragonService } from './crud-dragon/dragon.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

//Pipes
import { ArraySortPipe } from '../shared/pipes/array-sort.pipe';
import { LoginService } from './login/service/login.service'


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DragonListComponent,
    DragonCreateComponent,
    DragonDetailsComponent,
    DragonUpdateComponent,
    ArraySortPipe
  ],
  imports: [
  CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    DragonListComponent,
    DragonCreateComponent,
    DragonDetailsComponent,
    DragonUpdateComponent,
    ArraySortPipe
  ],
  providers: [DragonService, NgxSpinnerService, LoginService]
})
export class ViewsModule { }
