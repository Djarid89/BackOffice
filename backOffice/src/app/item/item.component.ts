import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../services/items-conteiner.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
