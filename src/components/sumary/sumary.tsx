'use client'

import style from './sumary.module.css';
import { ArrowRight } from 'lucide-react';
import { productInterface } from '@/types/productInterface';
import { productUtils } from '@/utils/productUtils';
import { v4 as uuidv4 } from 'uuid';

export function Sumary() {
    const { addProduct } = productUtils();
    
    async function addNewProductToCart() {
        const newProduct: productInterface = {
            id: uuidv4(),
            title: "Nome do produto Nome do produto Nome do produto Nome do produto Nome do produto",
            price: "120,00",
            quantity: 100,
            total: "1.200,00"
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
                        <p>R$ 410,00</p>
                    </div>
                    <div className={style.container_freight}>
                        <p>Frete</p>
                        <p>R$ 34,00</p>
                    </div>
                    <div className={style.container_cupon}>
                        <p>Adicionar cupom</p>
                        <ArrowRight color='#509450' size={13} style={{ marginTop: "2px" }} />
                    </div>
                </div>
                <div className={style.container_total}>
                    <p>Total</p>
                    <p>R$ 444,00</p>
                </div>
            </div>
            <button className={style.btn_checkout}>Comprar</button>
            <button onClick={addNewProductToCart}>Adicionar produto</button>
        </div>
    )
}