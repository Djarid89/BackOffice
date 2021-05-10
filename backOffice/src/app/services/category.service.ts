import { map } from 'rxjs/operators';
import { Icategory } from './../interfaces/icategory';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
  }

  getCategoriesDescr(): Observable<string[]> {
    return this.http.get<Icategory[]>('stats/categories').pipe(
      map(category => category.map(cat => cat.category))
    );
  }
}
