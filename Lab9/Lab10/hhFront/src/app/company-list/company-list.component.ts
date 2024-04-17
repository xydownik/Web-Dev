import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {CompanyService} from "../company.service";
import {Company} from "../models/company";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{

  companies!: Company[]

  constructor(private companyService: CompanyService) {
    this.companies = []
  }
  ngOnInit(): void {
    this.getCompanies()
  }
  getCompanies(){
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies
    })
  }


}
