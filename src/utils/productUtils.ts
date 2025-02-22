import { useProductsContext } from "@/context/products_context";
import { productInterface } from "@/types/productInterface";

export function productUtils() {
    const { products, setProducts } = useProductsContext();

    async function addProduct(value: productInterface) {
        await new Promise((resolve, reject) => {
            try {
                setProducts([...products, value]);
                resolve("Produto excluido com sucesso!");
            } catch (error) {
                reject("Erro ao erro ao excluir o produto!");
            }
        });
    }

    async function removeProduct(id: string) {
        const product = products.find((item) => item.id === id);
        if (!product) {
            return "Produto não encontrado!";
        }
        await new Promise((resolve, reject) => {
            try {
                setProducts(products.filter((item) => item.id !== id));
                resolve("Produto excluido com sucesso!");
            } catch (error) {
                reject("Erro ao erro ao excluir o produto!");
            }
        });
    }
    return { addProduct, removeProduct };
}