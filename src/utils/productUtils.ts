import { useProductContext } from "@/context/productContext";
import { productInterface } from "@/types/productInterface";

export function productUtils() {
    const { products, setProducts } = useProductContext();

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


    async function updateQuantityProduct(id: string, quantity: number) {
        await new Promise((resolve, reject) => {
            try {
                setProducts(products.map((item) => (item.id === id ? { ...item, quantity: quantity, total: quantity * item.price } : item)));
                resolve("Produto atualizado com sucesso!");
            } catch (error) {
                reject("Erro ao atualizar o produto!");
            }
        });
    }

    return { addProduct, removeProduct, updateQuantityProduct };
}