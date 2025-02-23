'use client'

import { productInterface } from "@/types/productInterface";
import { createContext, useContext, useState } from "react";

interface productContextInterface {
    products: productInterface[],
    setProducts: React.Dispatch<React.SetStateAction<productInterface[]>>;
}

const ProductContext = createContext<productContextInterface | null>(null);

export function ProductContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<productInterface[]>([]);
    
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    const productContext = useContext(ProductContext);
    if (!productContext) {
        throw new Error("Erro no contexto 'productsContext'.")
    }
    return productContext;
}