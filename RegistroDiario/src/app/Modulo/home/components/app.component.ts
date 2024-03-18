import { Component } from '@angular/core';
/*import { RouterModule } from '@angular/router'; // Altere para RouterModule
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ReactiveFormsModule } from '@angular/forms'; // Adicione esta linha
import { NzButtonModule } from 'ng-zorro-antd/button'; // Adicione esta linha*/

@Component({
  selector: 'router-outlet',
  //standalone: true,
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}
