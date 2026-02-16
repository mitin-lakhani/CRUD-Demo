import type { Product } from "./types";
const KEY = "products";

export const getProducts = (): Product[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(KEY, JSON.stringify(products));
};
