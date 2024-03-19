import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/configs/app.config';
import { AppModule } from './app/Modulo/home/app.module';


bootstrapApplication(AppModule, appConfig)
  .catch((err) => console.error(err));
