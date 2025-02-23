import { useProductContext } from "@/context/productContext";

export function getPrices() {
    const { products, setProducts } = useProductContext();

    function getSubTotal() {
        let subTotal = 0.00;
        products.forEach((item) => {
            subTotal = subTotal + item.total;
        });
        return subTotal;
    }

    function getFreight() {
        if (products.length > 0) {
            return 43.00;
        }
        return 0.00;
    }

    function getTotal() {
        const total = getSubTotal() + getFreight();
        return total;
    }

    return { getSubTotal, getFreight, getTotal };
}