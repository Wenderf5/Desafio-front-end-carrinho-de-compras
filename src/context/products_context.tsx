'use client'

import { products_interface } from "@/types/product";
import { createContext, useContext, useState } from "react";

interface products_context_interface {
    products: products_interface[],
    setProducts: React.Dispatch<React.SetStateAction<products_interface[]>>;
}

const ProductsContext = createContext<products_context_interface | null>(null);

export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<products_interface[]>([]);
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    const productsContext = useContext(ProductsContext);
    if (!productsContext) {
        throw new Error("Erro no contexto 'productsContext'.")
    }
    return productsContext;
}