import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models/vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000/api/vacancies"
  constructor(private httpClient: HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL}`)
  }
  getVacancy(id: number){
    return this.httpClient.get<Vacancy>(`${this.BASE_URL + '/' + id}`)
  }

  getTopTen(): Observable<Vacancy[]>{
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL + '/top_ten'}`)
  }
}
