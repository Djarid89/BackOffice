import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() products: Product[] | undefined;
  @Output() remove = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  emitRemove(product: Product): void {
    this.remove.emit(product);
  }

}
