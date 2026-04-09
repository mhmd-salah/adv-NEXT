'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import HoveredLink from './hovered-link';

interface Product {
  id: number;
  name: string;
  price: number;
}

const newProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
];

export default function NewProducts() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(newProducts);
    console.log('New Products Use Effect Ran');
  }, [])

  console.log('New Products Client Component Rendered');

  return (
    <div className='flex flex-col gap-4'>

      <HoveredLink href='/products'>Products</HoveredLink>

      <p>Products: {products.length}</p>


      <ul className='grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <li key={product.id} className='bg-zinc-800 p-4 rounded-md'>
            <h3 className='text-white text-lg font-bold'>{product.name}</h3>
            <p className='text-zinc-400'>{product.price}</p>
          </li>
        ))}
      </ul>

      <button
        className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors'
        onClick={() => router.push('/products')}>Navigate back to products</button>
    </div>

  )
}
