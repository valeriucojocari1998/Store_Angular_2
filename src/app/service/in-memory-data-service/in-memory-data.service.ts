import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from 'src/assets/products';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        name: 'iPhone 13 Pro Max',
        price: 1299,
        description: 'Very Very Good Phone',
        image: 'assets/images/iphone13promax/gold.png',
        total: 10,
        color: 'gold',
        amount: 1,
        productId: 1
      },
      {
        id: 10001,
        name: 'iPhone 13 Pro Max',
        price: 1269,
        description: 'Very Very Good Phone',
        image: 'assets/images/iphone13promax/blue.png',
        total: 10,
        amount: 1,
        productId: 1,
        color: 'blue'
      },
      {
        id: 20001,
        name: 'iPhone 13 Pro Max',
        price: 1239,
        description: 'Very Very Good Phone',
        image: 'assets/images/iphone13promax/white.png',
        total: 10,
        amount: 1,
        productId: 1,
        color: 'white'
      },
      {
        id: 30001,
        name: 'iPhone 13 Pro Max',
        price: 1209,
        description: 'Very Very Good Phone',
        image: 'assets/images/iphone13promax/black.png',
        total: 10,
        amount: 1,
        productId: 1,
        color: 'black'
      },
      {
        id: 2,
        name: 'iPhone 13 Pro',
        price: 1039,
        description: 'Very Good Phone',
        image: 'assets/images/iphone13pro/blue.png',
        total: 100,
        amount: 1,
        productId: 2,
        color: 'blue'
      },
      {
        id: 10001,
        name: 'iPhone 13 Pro',
        price: 1099,
        description: 'Very Good Phone',
        image: 'assets/images/iphone13pro/gold.png',
        total: 100,
        amount: 1,
        productId: 2,
        color: 'gold'
      },
      {
        id: 20001,
        name: 'iPhone 13 Pro',
        price: 1069,
        description: 'Very Good Phone',
        image: 'assets/images/iphone13pro/black.png',
        total: 100,
        amount: 1,
        productId: 2,
        color: 'black'
      },
      {
        id: 3,
        name: 'iPhone 13',
        price: 899,
        description: 'Good Phone',
        image: 'assets/images/iphone13.png',
        total: 100,
        amount: 1,
        productId: 3,
        color: ''
      },
      {
        id: 4,
        name: 'Samsung Galaxy Z Flip3',
        price: 1000,
        description: 'Good flipping phone',
        image: 'assets/images/galaxyzflip3.png',
        total: 50,
        amount: 1,
        productId: 4,
        color: ''
      },
      {
        id: 5,
        name: 'Samsung Galaxy Z Fold3',
        price: 1999,
        description: 'Posh flipping phone',
        image: 'assets/images/galaxyzfold3.png',
        total: 50,
        amount: 1,
        productId: 5,
        color: ''
      },
      {
        id: 6,
        name: 'Motorola RAZR 2nd gen',
        price: 999,
        description: 'Old style flip smartphone',
        image: 'assets/images/motorolarazr.png',
        total: 100,
        amount: 1,
        productId: 6,
        color: ''
      },
      {
        id: 7,
        name: 'iPhone 13 Mini',
        price: 799,
        description: 'Very Very Good Small Phone',
        image: 'assets/images/iphone13mini.png',
        total: 10,
        amount: 1,
        productId: 7,
        color: ''
      },
      {
        id: 8,
        name: 'iPhone 12 Pro Max',
        price: 1299,
        description: 'Very Very Good Phone',
        image: 'assets/images/iphone12pro.png',
        total: 100,
        amount: 1,
        productId: 8,
        color: ''
      },
      {
        id: 9,
        name: 'iPhone 12 Pro',
        price: 1099,
        description: 'Very Good Phone',
        image: 'assets/images/iphone12pro.png',
        total: 100,
        amount: 1,
        productId: 9,
        color: ''
      },
      {
        id: 10,
        name: 'iPhone 12',
        price: 899,
        description: 'Good phone',
        image: 'assets/images/iphone12.png',
        total: 50,
        amount: 1,
        productId: 10,
        color: ''
      },
      {
        id: 11,
        name: 'iPhone 12 Mini',
        price: 699,
        description: 'Good mini phone',
        image: 'assets/images/iphone12mini.png',
        total: 50,
        amount: 1,
        productId: 11,
        color: ''
      },
      {
        id: 12,
        name: 'iPhone SE 2nd generation',
        price: 599,
        description: 'Old style iphone',
        image: 'assets/images/iphonese2.png',
        total: 100,
        amount: 1,
        productId: 12,
        color: ''
      },
      {
        id: 13,
        name: 'Samsung Galaxy note 20',
        price: 1299,
        description: 'Very Very Good Phone with pencil',
        image: 'assets/images/galaxynote20.png',
        total: 10,
        amount: 1,
        productId: 13,
        color: ''
      },
      {
        id: 14,
        name: 'Samsung Galaxy note 10',
        price: 1099,
        description: 'Very Good Phone with pencil',
        image: 'assets/images/galaxynote10.png',
        total: 100,
        amount: 1,
        productId: 14,
        color: ''
      },
      {
        id: 15,
        name: 'Samsung Galaxy note 9',
        price: 899,
        description: 'Good Phone with pencil',
        image: 'assets/images/galaxynote9.png',
        total: 100,
        amount: 1,
        productId: 15,
        color: ''
      },
      {
        id: 16,
        name: 'Samsung Galaxy S20',
        price: 1199,
        description: 'Very Very Good Android Phone',
        image: 'assets/images/galaxys20.png',
        total: 50,
        amount: 1,
        productId: 16,
        color: ''
      },
      {
        id: 17,
        name: 'Samsung Galaxy S10',
        price: 999,
        description: 'Very Good Android Phone',
        image: 'assets/images/galaxys10.png',
        total: 50,
        amount: 1,
        productId: 17,
        color: ''
      },
      {
        id: 18,
        name: 'Samsung Galaxy S9',
        price: 799,
        description: 'Good Android Phone',
        image: 'assets/images/galaxys9.png',
        total: 100,
        amount: 1,
        productId: 18,
        color: ''
      }
    ];
    return {products};
  }
}
