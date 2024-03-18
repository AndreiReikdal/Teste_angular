import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/configs/app.config';
import { AppComponent } from './app/Modulo/home/components/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.log(err));
