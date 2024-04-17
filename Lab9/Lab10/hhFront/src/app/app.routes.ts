import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {TopTenComponent} from "./top-ten/top-ten.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Head Hunter'},
  {path: 'home/companies', component: CompanyListComponent, title: 'All Companies'},
  {path: 'home/companies/:id', component: CompanyDetailComponent, title: 'Company Details'},
  {path: 'home/companies/:id/vacancies', component: CompanyVacanciesComponent, title: 'Company Vacancies'},
  {path: 'home/vacancies', component: VacancyListComponent, title: 'All Vacancies'},
  {path: 'home/top-ten', component: TopTenComponent, title: 'Top 10 Vacancies'},
  {path: '', redirectTo: '/home', pathMatch: "full"}
];
