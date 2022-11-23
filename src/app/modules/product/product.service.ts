import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
       name: "Product_1",
       category: "Category_1",
       description: "DESC of product 1",
       price: 11.99,
       currency: "PLN"
      },
      {
       name: "Product_2",
       category: "Category_2",
       description: "DESC of product 2",
       price: 12.99,
       currency: "PLN"
      },
      {
       name: "Product_3",
       category: "Category_3",
       description: "DESC of product 3",
       price: 13.99,
       currency: "PLN"
      }
     ];
  }
}
