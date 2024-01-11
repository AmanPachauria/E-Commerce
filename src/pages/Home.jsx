import React, { useState, useEffect } from 'react';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState({});
 
  const [fixLoading, setFixLoading] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      if( fixLoading === 0 ) {
        setLoading(true);
        setFixLoading(1);
      }
      
      try {
        if (cache[page]) {
          setProducts((prevProducts) => [...prevProducts, ...cache[page]]);
        } else {
          const response = await fetch(`https://fakestoreapi.com/products?limit=20&page=${page}`);
          if (response.ok === false) {
            setError("Failed to fetch products");
            return;
          }
          const data = await response.json();
          setCache((prevCache) => ({ ...prevCache, [page]: data }));
          setProducts((prevProducts) => [...prevProducts, ...data]);
        }
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchProducts();
  }, [page, cache]);

  const onShowMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <p className='text-red-500 font-medium sm:font-semibold mt-5'>Error: {error}</p>;
  }

  return (
    <div>
    <div className="mt-10 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {!loading && products.length === 0 && (
        <p className='text-2xl text-center text-slate-300'>No Products Available!</p>
      )}
      {loading && products.length > 0 && (
        <p className='text-4xl text-center w-full'>
          Loading...
        </p>
      )}
      {!loading && products && products.map((product) => (
        <ListingItem key={product.id} product={product} />
      ))}
      
    </div>
    {!loading && products.length > 0 && products.length % 20 === 0 && (
        <div className="flex justify-center">
          <button
            onClick={onShowMoreClick}
            className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
          >
            Show more
          </button>
        </div>
      )}
      </div>
  );
}
