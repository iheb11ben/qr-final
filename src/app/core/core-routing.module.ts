import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './compte/detail/detail.component';
import { ParametreComponent } from './compte/parametre/parametre.component';
import { FamilleComponent } from './famille/famille.component';
import { AfficheComponent } from './forms/cartevisite/affiche/affiche.component';
import { Affiche2Component } from './forms/cartevisite/affiche2/affiche2.component';
import { CartevisiteComponent } from './forms/cartevisite/cartevisite.component';
import { FormsComponent } from './forms/forms.component';
import { MenuComponent } from './forms/menu/menu.component';
import { UrlComponent } from './forms/url/url.component';
import { HomeComponent } from './home/home.component';
import { ListqrComponent } from './listqr/listqr.component';

const routes: Routes = [
  {path:'carte/affichefinal',component:Affiche2Component},

  
  {path:'',component:HomeComponent,children:[
    {path:'',component:FamilleComponent},
    {path:'form',component:FormsComponent},
    {path:'carte/affiche',component:AfficheComponent},
  {path:'menu',component:MenuComponent},
  {path:'list',component:ListqrComponent},
  {path:'carte',component:CartevisiteComponent},
  {path:'parametre',component:ParametreComponent},
  {path:'url',component:UrlComponent},
  {path:'detail',component:DetailComponent}
    

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
