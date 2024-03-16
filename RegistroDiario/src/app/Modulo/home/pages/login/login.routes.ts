import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const LOGIN_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  
];
//,
//{ path: '', pathMatch: 'full', redirectTo: '/login' },
//{ path: 'login', loadChildren: () => import('./login.routes').then(m => m.LOGIN_ROUTES) }