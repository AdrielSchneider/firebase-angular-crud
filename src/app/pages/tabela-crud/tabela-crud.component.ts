import { Component, OnInit } from '@angular/core';

import { NbWindowService } from '@nebular/theme';
import { WindowComponent } from '../window/window.component';
import { Product } from '../model/product';
import { ProductService } from '../model/Product.service';
import { Observable } from 'rxjs';
import { ProductDataService } from '../model/product-data.service';

@Component({
  selector: 'tabela-crud',
  templateUrl: './tabela-crud.component.html',
  styleUrls: ['./tabela-crud.component.scss']
})
export class TabelaCrudComponent implements OnInit {

  productsList: Observable<any>;
  products: Product;

  constructor(
    private windowService: NbWindowService,
    private productService: ProductService,
    private productDataService: ProductDataService
  ) { }

  cols = [
    { field: '', header: '', width: '5%'},
    { field: 'code', header: 'Código', width: '15%'},
    { field: 'name', header: 'Nome', width: '15%' },
    { field: 'description', header: 'Descrição', width: '15%' },
    { field: 'quantity', header: 'Quantidade', width: '15%' },
    { field: 'price', header: 'Preço', width: '15%' },
    { field: 'edit', header: 'Ações', width: '20%'}    
  ]

  ngOnInit() {
    this.productsList = this.productService.getAll();
  }

  edit(product: Product, key: string) {
    this.productDataService.getProduct(product, key);
    this.windowService.open(WindowComponent, { title: 'Editar Produto' });
  }

  delete(key: string) {
    this.productService.delete(key);
  }

  adicionarProduto() {
    this.productDataService.clear();
    this.windowService.open(WindowComponent, { title: `Adicionar Produto` });
  }

}
