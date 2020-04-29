import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent} from './companies/companies.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import {CompanyItemComponent} from './company-item/company-item.component';
import {VacancyItemComponent} from './vacancy-item/vacancy-item.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'companies/:id/vacancies', component: VacancyComponent },
  { path: 'companies/:id', component: CompanyItemComponent},
  {path: 'vacancies/:id', component: VacancyItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
