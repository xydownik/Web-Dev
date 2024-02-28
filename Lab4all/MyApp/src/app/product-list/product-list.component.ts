import {Component} from "@angular/core";

import {Product, products} from '../products';
import {filter} from "rxjs";
@Component({
  selector:'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css']
})

export class ProductListComponent{
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
