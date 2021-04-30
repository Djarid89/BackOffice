import { ItemsContainerComponent } from '../items-container/items-container.component';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: ItemsContainerComponent
})
export class ItemsConteinerServices {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('products');
  }
}
