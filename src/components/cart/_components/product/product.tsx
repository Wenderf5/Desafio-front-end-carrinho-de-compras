import style from './product.module.css';
import Image from 'next/image';
import product_photo from '../../../../assets/placa de video.png';
import { X, Plus, Minus } from 'lucide-react';
import { productUtils } from '@/utils/productUtils';

interface props {
    product: {
        id: string,
        title: string,
        price: string,
        quantity: number,
        total: string
    }
}

export function Product({ product }: props) {
    const { removeProduct } = productUtils();
    async function deleteProduct() {
        const response = await fetch(`http://localhost:3000/api/product/${product.id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            await removeProduct(product.id);
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
                    <p>R$ {product.price}</p>
                </div>
            </td>
            <td>
                <div className={style.container_quantity}>
                    <button className={style.btn_minus_and_plus}><Minus size={13} color='#2b2b2b' /></button>
                    <p>{product.quantity}</p>
                    <button className={style.btn_minus_and_plus}><Plus size={13} color='#2b2b2b' /></button>
                </div>
            </td>
            <td>
                <div className={style.total}>
                    <p>R$ {product.total}</p>
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