import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStore } from '../interfaces/istore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreInfo(): Observable<IStore> {
    return this.http.get<IStore>('');
  }
}
