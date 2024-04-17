import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    CompanyListComponent,
    VacancyListComponent,
    CompanyDetailComponent,
    CompanyVacanciesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hhFront';
}
