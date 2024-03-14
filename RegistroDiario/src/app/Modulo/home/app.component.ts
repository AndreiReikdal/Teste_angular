import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pages/home/app.component.html',
  styleUrl: './pages/home/app.component.scss'
})
export class AppComponent {
  title = 'RegistroDiario';
}
