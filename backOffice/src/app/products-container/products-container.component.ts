import { ProductsServices as ProductsServices, Product } from '../services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  @Output() newProduct = new EventEmitter<boolean>();
  @Input() products: Product[] | undefined;
  showAdd = false;
  viewer = new Viewer();

  constructor(private productsService: ProductsServices, private router: Router) { }

  ngOnInit(): void {
  }

  remove(product: Product): void {
    this.productsService.removeProducts(product.id).subscribe(
      () => {
        const index = this.products?.indexOf(product);
        if (index !== undefined && index > -1) {
          this.products?.splice(index, 1);
        }
      }
    );
  }

  showNewProduct(): void {
    this.newProduct.emit(true);
  }
}

class Viewer {
  table = true;
  grid = false;

  toogle(): void {
    // tslint:disable-next-line: no-unused-expression
    this.table = !this.table;
    // tslint:disable-next-line: no-unused-expression
    this.grid = !this.grid;
  }
}
