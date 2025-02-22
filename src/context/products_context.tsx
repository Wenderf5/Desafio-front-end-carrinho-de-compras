'use client'

import { productInterface } from "@/types/productInterface";
import { createContext, useContext, useState } from "react";

interface productsContextInterface {
    products: productInterface[],
    setProducts: React.Dispatch<React.SetStateAction<productInterface[]>>;
}

const ProductsContext = createContext<productsContextInterface | null>(null);

export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<productInterface[]>([]);
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