import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // This fix ensures the page scrolls to top on every navigation
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    )
  ]
};
