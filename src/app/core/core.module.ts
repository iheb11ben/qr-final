import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './forms/menu/menu.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { UrlComponent } from './forms/url/url.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { ChildComponent } from './forms/url/child/child.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CartevisiteComponent,
    DetailComponent,
    ParametreComponent,
    UrlComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQrcodeStylingModule
  ]
})
export class CoreModule { }
