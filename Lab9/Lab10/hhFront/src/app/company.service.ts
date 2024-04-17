import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./models/company";
import {Observable} from "rxjs";
import {Vacancy} from "./models/vacancy";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = "http://127.0.0.1:8000/api/companies/"
  constructor(private httpClient: HttpClient) { }
  getCompanies(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.BASE_URL}`)
  }
  getCompany(id: number){
      return this.httpClient.get<Company>(`${this.BASE_URL + '/' + id}`)
  }
  getCompanyVacancies(id: number){
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL + id + '/vacancies'}`)
  }
}
