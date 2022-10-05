import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './forms/menu/menu.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { UrlComponent } from './forms/url/url.component';
import { FormsModule } from '@angular/forms';
import { AfficheComponent } from './forms/cartevisite/affiche/affiche.component';
import { Affiche2Component } from './forms/cartevisite/affiche2/affiche2.component';
import {QRCodeModule} from 'angularx-qrcode'
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CartevisiteComponent,
    DetailComponent,
    ParametreComponent,
    UrlComponent,
    AfficheComponent,
    Affiche2Component
  ],
  imports: [
    CommonModule,
    // QRCodeModule,
    CoreRoutingModule,
    FormsModule,
    NgxQRCodeModule
  ]
})
export class CoreModule { }
