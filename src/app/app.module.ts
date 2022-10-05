import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FamilleComponent } from './core/famille/famille.component';
import { AccountComponent } from './core/account/account.component';
import { ListqrComponent } from './core/listqr/listqr.component';
import { SidebarComponent } from './core/structure/sidebar/sidebar.component';
import { HeaderComponent } from './core/structure/header/header.component';
import { FooterComponent } from './core/structure/footer/footer.component';
import { FormsComponent } from './core/forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FamilleComponent,
    AccountComponent,
    ListqrComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQrcodeStylingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
