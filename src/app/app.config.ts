import { ApplicationConfig ,NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ApiService} from "./services/api.service";
import {BrowserModule} from "@angular/platform-browser";
import { routes } from './app.routes';
import {CookieService} from "ngx-cookie-service";
import {AppComponent} from "./app.component";
import {provideHttpClient, withFetch} from "@angular/common/http";





export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ApiService,BrowserModule,provideHttpClient(withFetch()),CookieService],
};
