import style from './cart.module.css';
import { Product } from './_components/product/product';

export function Cart() {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.th_product}>PRODUTO</th>
                    <th>PREÇO</th>
                    <th>QUANTIDADE</th>
                    <th>TOTAL</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <Product />
                <Product />
                <Product />
            </tbody>
        </table>
    )
}