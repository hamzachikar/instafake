import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './home/profil/profil.component';

const routes: Routes = [
  {path:"auth",component:LoginComponent},
  {path:"",component:HomeComponent,children:[
    {path:"",component:HomePageComponent},
    {path:"profil",component:ProfilComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
