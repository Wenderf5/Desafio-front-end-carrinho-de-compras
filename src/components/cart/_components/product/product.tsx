import style from './product.module.css';
import Image from 'next/image';
import product_photo from '../../../../assets/placa de video.png';
import { X, Plus, Minus } from 'lucide-react';
import { productUtils } from '@/utils/productUtils';
import { formatCurrency } from '@/utils/formatCurrency';
import { useState } from 'react';

interface props {
    product: {
        id: string,
        title: string,
        price: number,
        quantity: number,
        total: number
    }
}

export function Product({ product }: props) {
    const [quantity, setQuantity] = useState(product.quantity);
    const { removeProduct, updateQuantityProduct } = productUtils();

    async function deleteProduct() {
        const response = await fetch(`http://localhost:3000/api/product/${product.id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            await removeProduct(product.id);
        }
    }

    async function decrementQuantity() {
        if (quantity >= 2) {
            const response = await fetch(`http://localhost:3000/api/product/${product.id}`, {
                headers: {
                    'contentType': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify({
                    newQuantity: quantity - 1
                })
            });
            if (response.status === 200) {
                await updateQuantityProduct(product.id, quantity - 1);
                setQuantity(quantity - 1);
            }
        }
    }

    async function incrementQuantity() {
        const response = await fetch(`http://localhost:3000/api/product/${product.id}`, {
            headers: {
                'contentType': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({
                newQuantity: quantity + 1
            })
        });
        if (response.status === 200) {
            await updateQuantityProduct(product.id, quantity + 1);
            setQuantity(quantity + 1);
        }
    }

    return (
        <tr className={style.tr}>
            <td>
                <div className={style.container_product}>
                    <Image
                        src={product_photo}
                        alt='Product image'
                        width={80}
                        style={{ borderRadius: "5px" }}
                    />
                    <p>{product.title}</p>
                </div>
            </td>
            <td>
                <div className={style.price}>
                    <p>{formatCurrency(product.price)}</p>
                </div>
            </td>
            <td>
                <div className={style.container_quantity}>
                    <button onClick={decrementQuantity} className={style.btn_minus_and_plus}><Minus size={13} color='#2b2b2b' /></button>
                    <p>{quantity}</p>
                    <button onClick={incrementQuantity} className={style.btn_minus_and_plus}><Plus size={13} color='#2b2b2b' /></button>
                </div>
            </td>
            <td>
                <div className={style.total}>
                    <p>{formatCurrency(product.total)}</p>
                </div>
            </td>
            <td>
                <div className={style.container_btn_close}>
                    <button onClick={deleteProduct} className={style.btn_close}><X size={16} color='#2b2b2b' /></button>
                </div>
            </td>
        </tr >
    )
}