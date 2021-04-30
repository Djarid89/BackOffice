import { IProduct } from './../interfaces/iproduct';
import { ItemsConteinerServices } from './../services/items-conteiner.service';
import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor(private service: ItemsConteinerServices) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((result) => this.products = result);
  }

}
