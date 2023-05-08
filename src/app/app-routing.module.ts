import { PagesComponent } from './pages/pages/pages.component';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes   = [
  
  {
    path: '',  component: PagesComponent,

    /* Rutas Hijas */
    children : [

      {path: 'dashboard',  component: DashboardComponent},
      {path: 'progress',  component: ProgressComponent},
      {path: 'grafica1',  component: Grafica1Component},
      {path: '',  redirectTo: '/dashboard', pathMatch: 'full'},

    ]
  },

  {path: 'register',  component: RegisterComponent},
  {path: 'login',  component: LoginComponent},

  {path: '**',  component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
