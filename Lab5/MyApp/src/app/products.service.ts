import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./products";
import {Category} from "./category";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) {
  }


  readonly url = 'http://localhost:3000/';

  async getAllProductsByCategory(categoryName: String): Promise<Product[]> {
    const data = await fetch(`${this.url}${categoryName}`);
    return await data.json() ?? [];
  }
  async getAllCategories(): Promise<Category[]> {
    const data = await fetch(`${this.url}categories`);
    return await data.json() ?? {};
  }


}
