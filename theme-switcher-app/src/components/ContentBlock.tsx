import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ContentBlock: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log("Error fetching products: ", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(({ id, title, description, price, thumbnail }) => (
        <div
          key={id}
          className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {description}
          </p>
          <p className="mt-2 font-bold">${price}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentBlock;
