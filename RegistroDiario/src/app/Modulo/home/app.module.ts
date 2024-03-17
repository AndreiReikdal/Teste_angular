import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component'; // Verifique este caminho
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
