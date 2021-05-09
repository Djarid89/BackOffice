import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() products: Product[] | undefined;
  @Output() remove = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  emitRemove(product: Product): void {
    this.remove.emit(product);
  }

}
