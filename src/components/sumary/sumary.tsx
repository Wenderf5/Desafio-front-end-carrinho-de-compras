'use client'

import style from './sumary.module.css';
import { ArrowRight } from 'lucide-react';
import { productInterface } from '@/types/productInterface';
import { productUtils } from '@/utils/productUtils';
import { v4 as uuidv4 } from 'uuid';
import { formatCurrency } from '@/utils/formatCurrency';
import { getPrices } from '@/utils/getPrices';
import { useProductContext } from '@/context/productContext';

export function Sumary() {
    const { products } = useProductContext();
    const { getSubTotal, getFreight, getTotal } = getPrices();
    const { addProduct } = productUtils();

    async function addNewProductToCart() {
        const newProduct: productInterface = {
            id: uuidv4(),
            title: "Nome do produto Nome do produto Nome do produto Nome do produto Nome do produto",
            price: 120.39,
            quantity: 1,
            total: 120.39
        }
        const response = await fetch('http://localhost:3000/api/product', {
            headers: {
                'contentType': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ product: newProduct })
        });
        if (response.status === 200) {
            await addProduct(newProduct);
        } else if (response.status === 500) {
            console.log("Erro ao adicionar o produto ao carrinho!");
        }
    }

    return (
        <div className={style.sumary}>
            <div className={style.resume}>
                <p className={style.purchase_summary}>Resumo da compra</p>
                <div className={style.container_prices_and_cupon}>
                    <div className={style.container_sub_total}>
                        <p>Sub total</p>
                        <p>{formatCurrency(getSubTotal())}</p>
                    </div>
                    <div className={style.container_freight}>
                        <p>Frete</p>
                        <p>{formatCurrency(getFreight())}</p>
                    </div>
                    <div className={style.container_cupon}>
                        <p>Adicionar cupom</p>
                        <ArrowRight color='#509450' size={13} style={{ marginTop: "2px" }} />
                    </div>
                </div>
                <div className={style.container_total}>
                    <p>Total</p>
                    <p>{formatCurrency(getTotal())}</p>
                </div>
            </div>
            <button className={products.length < 1 ? style.btn_checkout_none : style.btn_checkout}>Comprar</button>
            <button onClick={addNewProductToCart}>Adicionar produto</button>
        </div>
    )
}