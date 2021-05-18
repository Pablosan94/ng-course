import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { FoodLabModule } from "./food-lab/food-lab.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FoodLabModule)
  .catch(err => console.error(err));
