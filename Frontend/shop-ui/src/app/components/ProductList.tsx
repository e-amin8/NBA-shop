'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    category: string
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products: ', err))
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
            {products.map((product) => (
                <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className="block w-full"
                >
                    <div className="border rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md"
                    />
                    <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-indigo-600 font-semibold mt-1">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}