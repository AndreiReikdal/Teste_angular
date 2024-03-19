import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppComponent } from './components/app.component';


export const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full' }
  
  // Adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



