import { element } from 'protractor';
import { Icategory } from './../interfaces/icategory';
import { CategoryService } from './../services/category.service';
import { Product } from './../services/products.service';
import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  error = '';
  categories: Icategory[] = [];

  constructor(private productsService: ProductsServices) { }

  ngOnInit(): void {
  }

  add(): void {
    if(this.title === '') {
      this.error = 'Titolo mancante'
      return;
    } else if(this.description === '') {
      this.error = 'Descrizione mancante'
      return;
    } else if(this.category === '') {
      this.error = 'Categoria mancante'
      return;
    } else if(this.employee === '') {
      this.error = 'Impiegato mancante'
      return;
    } 

    // tslint:disable-next-line: max-line-length
    this.productsService.addProducts(new Product('', this.title, this.category, this.price, this.employee, this.description, [])).subscribe(
      (idProduct) => {
        this.updateProducts.emit(idProduct);
        this.newProduct.emit(false);
        this.error = '';
      },
      () => this.error = 'Errore in fase di inserimento'
    );
  }

  goBack(): void {
    this.error = ''
    this.newProduct.emit(false);
  }

}
