import { ItemsConteinerServices as ProductsServices, Product } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { IStore } from './interfaces/istore';
import { StoreService } from './services/store.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store$: Observable<IStore> | undefined;
  products$: Observable<Product[]> | undefined;
  showwAll$ = new Observable<[IStore, Product[]]>();

  constructor(private storeService: StoreService, private productsService: ProductsServices) { }

  ngOnInit(): void {
    this.store$ = this.storeService.getStoreInfo();
    this.products$ = this.productsService.getProducts();
    this.showwAll$ = forkJoin([this.store$, this.products$]).pipe(take(1));
  }
}
