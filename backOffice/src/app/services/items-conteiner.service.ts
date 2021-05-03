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

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('products').pipe(map(products => products));
  }
}
