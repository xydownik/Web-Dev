import {Component, Input} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";
import {CommonModule} from "@angular/common";
import {ProductItemComponent} from "../product-item/product-item.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent,
    FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // products: Product[] = AppComponent.arguments.productList;
  @Input()curProducts: Product[] = []

  constructor(
  ) { }



  delete(product: Product) {
    const index = this.curProducts.findIndex(p => p === product);
    if (index !== -1) {
      this.curProducts.splice(index, 1);
    }
  }
}
