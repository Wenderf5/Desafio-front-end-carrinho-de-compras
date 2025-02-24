'use client'

import style from './cart.module.css';
import { useProductContext } from '@/context/productContext';
import { Product } from './_components/product/product';
import { Empty } from './_components/empty/empty';
import { useEffect, useState } from 'react';
import { Loading } from './_components/loading/loading';

export function Cart() {
    const { products, setProducts } = useProductContext();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/api/product', {
                method: 'GET'
            });
            const responseData = await response.json();
            setProducts([...responseData]);
            setIsLoading(false);
        }
        fetchData();
    }, []);

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
                    {isLoading ? <Loading /> : products.length === 0 ? <Empty /> : products.map((item) => (
                        <Product key={item.id} product={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}