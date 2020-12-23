import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Product } from './product';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase,) { }

  insert(product: Product) {
    this.db.list('productList').push(product)
      .then((result: any) => {
        console.log(result.code);
      });
  }

  update(product: Product, key: string) {
    this.db.list('productList').update(key, product);
  }

  delete(key: string) {
    this.db.object(`productList/${key}`).remove();
  }

  getAll() {
    return this.db.list('productList')
      .snapshotChanges()
      .pipe(map(el => {
        return el.map(p => ({
          key: p.payload.key,
          ... (p.payload.val() as any),
        }))
      }))
  }

  getCodeSequence() {

    //console.log(this.db.list("productList", ref => ref.orderByValue().limitToFirst(1)).snapshotChanges().pipe(map(el => {return el.map(p => {p.payload.val() as any})})));

    console.log(this.getAll());

    //console.log(this.db.createPushId);
    
  }

}
