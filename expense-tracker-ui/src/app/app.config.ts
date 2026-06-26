import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Yeh line zaroori hai

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()] // Yahan provideHttpClient() lazmi hona chahiye
};