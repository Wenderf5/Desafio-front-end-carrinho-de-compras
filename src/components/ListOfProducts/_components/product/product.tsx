import style from './product.module.css';
import GPU_FT from '../../../../assets/placa de video.png';
import Image from 'next/image';
import clsx from "clsx";
import { CircleX, Minus, Plus } from 'lucide-react';

export function Product() {
    return (
        <div className={style.container_product}>
            <div className={style.container_img_and_name}>
                <Image
                    src={GPU_FT}
                    alt="Product photo"
                    width={60}
                    style={{ borderRadius: "5px" }}
                />
                <p className={style.product_name}>Nome do produto Nome do produto Nome do produto Nome do produto Nome do produto</p>
            </div>
            <div className={style.container_description}>
                <p className={style.product_quantity}><Minus size={12} /> 100 <Plus size={12} /></p>
                <p className={style.product_description}>Preço: R$ 120,0000000000000000</p>
                <p className={style.product_description}>Total: R$ 360,000000000000000</p>
                <p className={style.product_delete}><CircleX size={15} color='red' /></p>
            </div>
        </div>
    )
}