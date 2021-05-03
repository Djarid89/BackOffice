import { ItemsConteinerServices, Product } from './../services/items-conteiner.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
  providers: [ItemsConteinerServices]
})
export class ItemsContainerComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  constructor(private service: ItemsConteinerServices) { }

  ngOnInit(): void {
    this.products$ = this.service.getProducts();
  }
}
