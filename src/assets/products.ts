export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  total: number;
  amount: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max',
    price: 1299,
    description: 'Very Very Good Phone',
    image: 'assets/images/iphone13promax.png',
    total: 10,
    amount: 1
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    price: 1099,
    description: 'Very Good Phone',
    image: 'assets/images/iphone13pro.png',
    total: 100,
    amount: 1
  },
  {
    id: 3,
    name: 'iPhone 13',
    price: 899,
    description: 'Good Phone',
    image: 'assets/images/iphone13.png',
    total: 100,
    amount: 1
  },
  {
    id: 4,
    name: 'Samsung Galaxy Z Flip3',
    price: 1000,
    description: 'Good flipping phone',
    image: 'assets/images/galaxyzflip3.png',
    total: 50,
    amount: 1
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold3',
    price: 1999,
    description: 'Posh flipping phone',
    image: 'assets/images/galaxyzfold3.png',
    total: 50,
    amount: 1
  },
  {
    id: 6,
    name: 'Motorola RAZR 2nd gen',
    price: 999,
    description: 'Old style flip smartphone',
    image: 'assets/images/motorolarazr.png',
    total: 100,
    amount: 1
  },
  {
    id: 1,
    name: 'iPhone 13 Pro Max',
    price: 1299,
    description: 'Very Very Good Phone',
    image: 'assets/images/iphone13promax.png',
    total: 10,
    amount: 1
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    price: 1099,
    description: 'Very Good Phone',
    image: 'assets/images/iphone13pro.png',
    total: 100,
    amount: 1
  },
  {
    id: 3,
    name: 'iPhone 13',
    price: 899,
    description: 'Good Phone',
    image: 'assets/images/iphone13.png',
    total: 100,
    amount: 1
  },
  {
    id: 4,
    name: 'Samsung Galaxy Z Flip3',
    price: 1000,
    description: 'Good flipping phone',
    image: 'assets/images/galaxyzflip3.png',
    total: 50,
    amount: 1
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold3',
    price: 1999,
    description: 'Posh flipping phone',
    image: 'assets/images/galaxyzfold3.png',
    total: 50,
    amount: 1
  },
  {
    id: 6,
    name: 'Motorola RAZR 2nd gen',
    price: 999,
    description: 'Old style flip smartphone',
    image: 'assets/images/motorolarazr.png',
    total: 100,
    amount: 1
  }
]
