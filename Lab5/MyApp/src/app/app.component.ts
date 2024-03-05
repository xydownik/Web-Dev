import {Component, inject, signal} from '@angular/core';
import {categories} from "./category";
import {Product, products} from "./products";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: Product[] = products;
  productService: ProductsService = inject(ProductsService)
  async sortByCategory(id: Number) {
    if (!id) {
      this.productList = []
    } else {
      this.productList = await this.productService.getAllProductsByCategory(+id);
    }
  }

  protected readonly categories = categories;
}

