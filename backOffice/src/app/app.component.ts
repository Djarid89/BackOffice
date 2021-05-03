import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStore } from './interfaces/istore';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store$: Observable<IStore> | undefined;

  constructor(private service: StoreService) { }

  ngOnInit(): void {
    this.store$ = this.service.getStoreInfo();
  }
}
