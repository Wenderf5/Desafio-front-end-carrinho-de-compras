import { useProductsContext } from "@/context/products_context";
import { products_interface } from "@/types/product";

export function productUtils() {
    const { products, setProducts } = useProductsContext();

    function addProduct(value: products_interface) {
        setProducts([...products, value]);
        return "Produto adicionado!";
    }

    function removeProduct(id: number) {
        const indexOfProduct = products.findIndex((item) => item.id === id);
        if (indexOfProduct === -1) {
            return "Produto não encontrado!";
        }
        const newProducts = [
            ...products.slice(0, indexOfProduct),
            ...products.slice(indexOfProduct + 1)
        ];
        setProducts(newProducts);
        return "Produto excluído!";
    }
    return { addProduct, removeProduct };
}