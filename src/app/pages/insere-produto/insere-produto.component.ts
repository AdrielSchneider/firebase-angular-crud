import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../model/Product.service';

@Component({
  selector: 'insere-produto',
  templateUrl: './insere-produto.component.html',
  styleUrls: ['./insere-produto.component.scss']
})
export class InsereProdutoComponent implements OnInit {

  product: Product;

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product(null,null,null,null,null);
  }

  cancel() {
    this.router.navigate(['pages/dashboard']);
  }

  save() {
    this.productService.insert(this.product);
    this.router.navigate(['pages/tabelacrud']);
    console.log(this.product);
  }
}
