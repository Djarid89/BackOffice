import { finalize, map } from 'rxjs/operators';
import { CategoryService } from './../services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  error = '';

  @Input() products: Product[] | undefined;

  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'polarArea';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Occorrenza categorie' }
  ];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategoriesDescr().subscribe(
      (categories) => {
        this.barChartLabels = categories;
        this.barChartData[0].data = categories?.map(category => {
          return this.products?.reduce((acc, product) => {
            if (category === product.category) {
              acc += 1;
            }
            return acc;
          }
          , 0);
        });
        this.barChartData[0].backgroundColor = categories?.map(() => {
          return 'rgb(' + this.generateNumber() + ',' + this.generateNumber() + ',' + this.generateNumber() + ')';
        });
        this.error = '';
      },
      () => this.error = 'Errore durante il caricamento delle categorie'
    );
  }

  generateNumber(): string {
    return Math.floor(Math.random() * 256).toString();
  }

}
