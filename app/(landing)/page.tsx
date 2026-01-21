"use client";

import { get } from "http";
import { getAllCategories } from "../services/category.services";
import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductSection from "./components/home/products";
import { getAllProducts } from "../services/product.services";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);
  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductSection products={products} />
    </main>
  );
}
