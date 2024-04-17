import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/vacancy";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './company-vacancies.component.html',
  styleUrl: './company-vacancies.component.css'
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies!: Vacancy[]

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) {
    this.vacancies = []
  }
  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies(){
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id')
      if(id){
         this.companyService.getCompanyVacancies(parseInt(id))
           .subscribe(vacancies =>{
           this.vacancies = vacancies
         })
      }

    }

  )}

}
