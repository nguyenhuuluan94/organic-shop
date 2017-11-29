import { ProductService } from '../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: {title: string}[];
  filterProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => this.filterProducts = this.products = products);
  }

  filter(query: string) {
    this.filterProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
