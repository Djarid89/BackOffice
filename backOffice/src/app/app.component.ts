import { ItemsConteinerServices as ProductsServices, Product } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IStore } from './interfaces/istore';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store: IStore | undefined;
  products: Product[] | undefined;

  constructor(private storeService: StoreService, private productsService: ProductsServices) { }

  ngOnInit(): void {
    forkJoin([this.storeService.getStoreInfo(), this.productsService.getProducts()]).subscribe(
      (value) => { this.store = value[0]; this.products = value[1]; }
    );
  }
}
