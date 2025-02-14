import style from './cart.module.css';
import { Product } from './_components/product/product';

export function Cart() {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.th_product}>PRODUTO</th>
                    <th className={style.th}>PREÇO</th>
                    <th className={style.th}>QUANTIDADE</th>
                    <th className={style.th}>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <Product />
            </tbody>
        </table>
    )
}