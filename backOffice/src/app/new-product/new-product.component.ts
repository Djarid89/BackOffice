import { element } from 'protractor';
import { Icategory } from './../interfaces/icategory';
import { CategoryService } from './../services/category.service';
import { Product } from './../services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsServices } from '../services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  @Output() updateProducts = new EventEmitter<string>();
  @Output() newProduct = new EventEmitter<boolean>();

  title = '';
  category = '';
  price = 0;
  employee = '';
  description = '';
  categories: Icategory[] = [];

  constructor(private productsService: ProductsServices, private categoryService: CategoryService, private location: Location) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  add(): void {
    // tslint:disable-next-line: max-line-length
    this.productsService.addProducts(new Product('', this.title, this.category, this.price, this.employee, this.description, [])).subscribe(
      (idProduct) => {
        this.updateProducts.emit(idProduct);
        this.newProduct.emit(false);
      }
    );
  }

  goBack(): void {
    this.newProduct.emit(false);
  }

}
