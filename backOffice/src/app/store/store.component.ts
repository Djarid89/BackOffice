import { Component, OnInit } from '@angular/core';
import { IStore } from '../interfaces/istore';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {

  shopInfo: IStore | undefined;

  constructor(private service: StoreService) { }

  ngOnInit(): void {
    this.service.getStoreInfo().subscribe(
      (result) => this.shopInfo = result,
      () => 'Todo'
    );
  }

}
