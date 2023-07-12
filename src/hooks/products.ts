import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function getProducts() {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(res.data);
      setLoading(false);
    } catch (err: unknown) {
      const error = err as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products, error, loading, addProduct };
}
