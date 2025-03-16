import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setProducts} from '../store/ProducReducer'

const ProductLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/items"); // API call to fetch products
      const products = await response.json();
      dispatch(setProducts(products)); // Dispatch the action to set products
    };

    fetchProducts();
  }, [dispatch]);

  return <div>Loading Products...</div>;
};

export default ProductLoader;
