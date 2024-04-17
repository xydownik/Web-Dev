import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Vacancy} from "../models/vacancy";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{
  vacancies!:Vacancy[]

  constructor(private vacancyService: VacancyService) {
    this.vacancies = []
  }
  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies(){
    return this.vacancyService.getVacancies().subscribe(vacancies =>{
      this.vacancies = vacancies
    })
  }

}
