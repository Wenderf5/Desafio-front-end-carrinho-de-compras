import style from './cart.module.css';
import { products_storage } from '@/storage/products';
import { Product } from './_components/product/product';
import { Empty } from './_components/empty/empty';

export function Cart() {
    return (
        <div className={style.cotainer_cart}>
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
                    {products_storage.length === 0 ? <Empty /> : products_storage.map((item, index) => (
                        <Product key={index} product={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}