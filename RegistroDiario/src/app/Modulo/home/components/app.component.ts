import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    Component,
    RouterModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,           
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    ReactiveFormsModule
  ],
  //providers:['./app/icons-provider.ts'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}


