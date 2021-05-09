import { ProductsServices as ProductsServices, Product } from './services/products.service';
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
  newProduct = false;

  constructor(private storeService: StoreService, private productsService: ProductsServices) { }

  ngOnInit(): void {
    forkJoin([this.storeService.getStoreInfo(), this.productsService.getProducts()]).subscribe(
      value => {
        this.store = value[0];
        this.products = value[1].sort((a, b) => {
          const textA = a.title.toUpperCase();
          const textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      }
    );
  }

  showNewProduct(value: boolean): void {
    this.newProduct = value;
  }

  addProduct(idProduct: string): void {
    this.productsService.getProduct(idProduct).subscribe(
      newProduct => this.products?.push(newProduct)
    );
  }
}
