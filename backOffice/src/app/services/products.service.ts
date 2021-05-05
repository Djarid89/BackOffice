import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<IProduct[]>('products').pipe(
      map(products => products.map(prod => this.castProduct(prod)))
    );
  }

  addProducts(product: Product | undefined): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>('products', product, { headers, responseType: 'text' as 'json' });
  }

  getProduct(idProduct: string): Observable<Product> {
    return this.http.get<Product>('products/' + idProduct);
  }

  removeProducts(idProduct: string): Observable<void> {
    return this.http.delete<void>('products/' + idProduct);
  }

  private castProduct(prod: IProduct): Product {
    // tslint:disable-next-line: max-line-length
    return new Product(prod.id, prod.data.title, prod.data.category, prod.data.price, prod.data.employee, prod.data.description, prod.data.reviews);
  }
}

export class Product {
  id: string;
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];

  constructor(id: string, title: string, category: string, price: number, employee: string, description: string, reviews: string[]) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.employee = employee;
    this.description = description;
    this.reviews = reviews;
  }
}
