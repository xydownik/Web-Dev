import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from '../products';
import {AppModule} from "../app.module";
import {CommonModule, NgForOf} from "@angular/common";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
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
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  putLike() {
    this.product.likes ++;
  }
  onRemove() {
    this.remove.emit(this.product);
  }
}
