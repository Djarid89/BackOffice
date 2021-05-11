import { ProductsServices as ProductsServices, Product } from '../services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  error = '';

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
        this.error = '';
      },
      () => this.error = 'Errore durante l\'eliminazione del prodotto'
    );
  }

  showNewProduct(): void {
    this.error = '';
    this.newProduct.emit(true);
  }

  orderData(): void {
    this.products = this.products?.sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
}

class Viewer {
  table = true;
  grid = false;
  chart = false;

  toogle(value: string): void {
    this.table = false;
    this.grid = false;
    this.chart = false;

    if (value === 'table') {
      this.table = true;
    }
    else if (value === 'grid') {
      this.grid = true;
    }
    else if (value === 'chart') {
      this.chart = true;
    }
  }
}
