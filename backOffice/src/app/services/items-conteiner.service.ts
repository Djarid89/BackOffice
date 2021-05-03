import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsConteinerServices {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<IProduct[]>('products').pipe(
      // tslint:disable-next-line: max-line-length
      map(products => products.map(product => new Product(product.data.title, product.data.category, product.data.price, product.data.employee, product.data.description, product.data.reviews)))
    );
  }
}

export class Product {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];

  constructor(title: string, category: string, price: number, employee: string, description: string, reviews: string[]) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.employee = employee;
    this.description = description;
    this.reviews = reviews;
  }
}
