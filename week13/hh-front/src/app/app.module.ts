import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';
import { CompanyItemComponent } from './company-item/company-item.component';
import { VacancyItemComponent } from './vacancy-item/vacancy-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    VacancyComponent,
    CompanyItemComponent,
    VacancyItemComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
