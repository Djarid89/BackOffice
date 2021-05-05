import { Icategory } from './../interfaces/icategory';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>('stats/categories');
  }
}
