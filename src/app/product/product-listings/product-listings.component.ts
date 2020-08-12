import { Component, OnInit } from '@angular/core';
import { products } from '../../../assets/products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {
  products = products;
  //productId: number = 1;
  //products: any = ['1.png', '2.jpeg', '3.png', '4.jpeg'];

  constructor() { }

  ngOnInit(): void {
  }

}
