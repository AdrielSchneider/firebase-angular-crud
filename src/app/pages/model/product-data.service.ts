import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor() { }

  private productSource = new BehaviorSubject({product: null, key: ''});
  actualProduct = this.productSource.asObservable();

  getProduct(product: Product, key: string) {
    this.productSource.next({product: product, key: key});
    this.actualProduct = this.productSource.asObservable();
  }

  clear() {
    this.actualProduct = null;
  }

}
