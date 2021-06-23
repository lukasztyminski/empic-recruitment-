import axios from 'axios';
import { useCallback } from 'react';

// const productsAPI = axios.create({});

export const useProducts = () => {
  const getProducts = useCallback(async () => {
    try {
      const result = await axios.get('/api/cart');
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getProducts,
  };
};
