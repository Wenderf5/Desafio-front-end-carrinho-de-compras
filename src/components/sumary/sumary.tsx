import style from './sumary.module.css';
import { ArrowRight } from 'lucide-react';

export function Sumary() {
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
                        <p>R$ 8,00</p>
                    </div>
                    <div className={style.container_cupon}>
                        <p>Adicionar cupom</p>
                        <ArrowRight color='#509450' size={13} style={{ marginTop: "2px" }} />
                    </div>
                </div>
                <div className={style.container_total}>
                    <p>Total</p>
                    <p>R$ 418,00</p>
                </div>
            </div>
            <button className={style.btn_checkout}>Comprar</button>
        </div>
    )
}