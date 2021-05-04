import { Product } from '../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  @Input() products: Product[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {

  }

  add(): void {

  }
}
