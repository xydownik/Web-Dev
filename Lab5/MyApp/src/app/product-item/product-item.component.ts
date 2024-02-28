import { Component } from '@angular/core';
import {Product, products} from '../products';
import {AppModule} from "../app.module";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  products = [...products];

  share($event: number) {
    let product = products.find(x => x.id == $event);
    const url = `https://t.me/share/url?url=${product?.link}&text=${product?.name}`;
    window.open(url, '_blank');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  protected readonly onclick = onclick;
}
