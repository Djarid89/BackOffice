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

  @Input() products: Product[] | undefined;
  categories: string[] = [];

  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Occorrenza categorie' }
  ];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategoriesDescr().pipe(
      finalize(() => {
        this.barChartLabels = this.categories;
        this.barChartData[0].data = this.categories?.map(category => {
          return this.products?.reduce((acc, product) => {
            if (category === product.category) {
              acc += 1;
            }
            return acc;
          }, 0);
        });
      })
    ).subscribe(
      (category) => {
        this.categories = category;
      },
      () => 'ToDo'
    );
  }

}
