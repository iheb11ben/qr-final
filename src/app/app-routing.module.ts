import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [


  {path:'core',loadChildren:()=>import ('./core/core.module').then( m=> m.CoreModule)},
  {path:'',loadChildren:()=>import ('./auth/auth.module').then( m=> m.AuthModule)},
   {path:'**',component:NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
