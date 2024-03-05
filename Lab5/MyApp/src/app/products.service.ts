import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product, products} from "./products";
import {Category} from "./category";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }



  async getAllProductsByCategory(categoryId: Number): Promise<Product[]> {
    return products.filter(x => +x.categoryId === +categoryId)
  }



}
