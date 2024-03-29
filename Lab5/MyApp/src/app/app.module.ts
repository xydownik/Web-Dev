import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductAlertsComponent} from "./product-alerts/product-alerts.component";
import {ProductItemComponent} from "./product-item/product-item.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProductListComponent,
    RouterLink,
  ],
  declarations: [
    AppComponent,
    ProductAlertsComponent
  ],
  exports: [
    ProductAlertsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{ }
