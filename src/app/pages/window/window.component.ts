import { Component, OnInit } from '@angular/core';

import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { Product } from '../model/product';
import { ProductDataService } from '../model/product-data.service';
import { ProductService } from '../model/Product.service';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  product: Product;
  key: string;
  success: Boolean;
  position: any = {};

  constructor(private windowRef: NbWindowRef,
    private productService : ProductService,
    private productDataService : ProductDataService,
    private toastr: NbToastrService) { }

  ngOnInit(): void {
    this.product = new Product(null,null,null,null,null);
    this.verifyProduct();
  }

  close() {
    this.toastr.show("Inserção/Alteração cancelada!", "Atenção", {status: "warning"} );
    this.productService.getCodeSequence();
    this.windowRef.close();
  }

  save() {
    this.validateProduct(this.product);
    if (this.success) {

      

      if (this.key) {
        this.productService.update(this.product, this.key);
      } else {
        this.productService.insert(this.product);
      }

      this.product = null;
      this.key = null;

      this.toastr.show("Produto Salvo com Sucesso!", 'Sucesso', {status: "success"});
      this.windowRef.close();
    }    
      
  }

  verifyProduct() {
  
    if (!this.productDataService.actualProduct) return;
  
    this.productDataService.actualProduct.subscribe(data => {
      if (!data.product || !data.key) return;

      this.product = this.setValues(data.product, this.product);
      this.key = data.key;
    });

  }

  setValues(origin, destiny) {
    for (let [key, value] of Object.entries(origin)) {
      destiny[key] = value;
    }
    return destiny;
  }

  validateProduct(prod: Product){

    this.success = true;

    let message: string = "";

    if (!prod.name && !message)
      message += (message != "" ? "\n": "") + "O nome do produto deve ser informado!";

    if (!prod.quantity && !message)
      message += (message != "" ? "\n": "") + "A Quantidade de Estoque deve ser informada!";
    
    if (!prod.price && !message)
      message += (message != "" ? "\n": "") + "O Preço do Produto deve ser informado!";

    if (message)
      this.createErrorToast(message);

  }

  createErrorToast(msg: string) {
    this.success = false;
    this.toastr.show(msg, "Erro", {status: "danger"} );
    //ultralab04073
  }

}