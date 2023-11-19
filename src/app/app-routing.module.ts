import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { SocialComponent } from './social/social.component';
import { LoginComponent } from './login/login.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "contatti", component: ContattiComponent},
  {path: "social", component: SocialComponent},
  {path: "login", component:LoginComponent},
  {path: "registrati", component: RegistratiComponent},
  {path: "home", component:HomeComponent},
  {path: "dashboard/:token", component:DashboardComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
