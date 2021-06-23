import axios from 'axios';
import { useCallback } from 'react';

const productsAPI = axios.create({});

export const useProducts = () => {
  const getProducts = useCallback(async () => {
    try {
      const result = await productsAPI.get('/api/cart');
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getProducts,
  };
};
