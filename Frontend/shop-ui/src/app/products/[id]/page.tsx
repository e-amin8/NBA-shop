'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
    id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function ProductDetailPage() {
    const { id } = useParams();
    console.log("Product ID from URL:", id);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error fetching product: ", err));
    }, [id]);

    if (!product) {
        return <p className="text-center mt-10 text-gray-600">Loading product...</p>;
    }

    return (
        <main>
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full max-w-md h-80 object-cover rounded-lg shadow-md"
            />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-500 text-sm mt-1">{product.category}</p>
            <p className="mt-2">{product.description}</p>
            <p className="text-indigo-600 font-semibold mt-3 text-lg">{product.price}</p>
        </main>
    )
}