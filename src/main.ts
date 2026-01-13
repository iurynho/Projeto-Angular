import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { register } from 'swiper/element/bundle';

// Registra os Web Components do Swiper 11 globalmente.
register();

// Inicializa a aplicação no modo Standalone (sem AppModule).
bootstrapApplication(App, appConfig)
  // Captura erros de bootstrap para facilitar debug.
  .catch((err: unknown) => console.error(err));
