import style from './product.module.css';
import Image from 'next/image';
import product_photo from '../../../../assets/placa de video.png';
import { X, Plus, Minus } from 'lucide-react';

export function Product() {
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
                    <p>Nome do produto Nome do produto Nome do produto Nome do produto Nome do produto</p>
                </div>
            </td>
            <td>
                <div className={style.price}>
                    <p>R$ 120,00</p>
                </div>
            </td>
            <td>
                <div className={style.container_quantity}>
                    <button className={style.btn_minus_and_plus}><Minus size={13} color='#2b2b2b' /></button>
                    <p>100</p>
                    <button className={style.btn_minus_and_plus}><Plus size={13} color='#2b2b2b' /></button>
                </div>
            </td>
            <td>
                <div className={style.total}>
                    <p>R$ 1.200,00</p>
                </div>
            </td>
            <td>
                <div className={style.container_btn_close}>
                    <button className={style.btn_close}><X size={16} color='#2b2b2b' /></button>
                </div>
            </td>
        </tr >
    )
}