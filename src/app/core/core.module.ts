import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './forms/menu/menu.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { UrlComponent } from './forms/url/url.component';






@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CartevisiteComponent,
    DetailComponent,
    ParametreComponent,
    UrlComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
