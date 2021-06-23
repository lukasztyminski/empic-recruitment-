import axios from 'axios';
import { API_PRODUCTS } from 'constants';
import { useCallback } from 'react';

const { CART } = API_PRODUCTS;

export const productsAPI = axios.create({});

export const useProducts = () => {
  const getProducts = useCallback(async () => {
    try {
      const result = await productsAPI.get(CART);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getProducts,
  };
};
