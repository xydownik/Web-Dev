import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/vacancy";
import {VacancyService} from "../vacancy.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-top-ten',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css'
})
export class TopTenComponent implements OnInit{
  topTen!: Vacancy[]

  constructor(private service: VacancyService) {
    this.topTen = []
  }

  ngOnInit(): void {
    this.service.getTopTen().subscribe(topTen =>
    this.topTen = topTen)
  }

}
