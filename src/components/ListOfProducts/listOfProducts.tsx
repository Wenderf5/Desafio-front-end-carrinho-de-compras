import style from './listOfProducts.module.css';
import { Product } from './_components/product/product';
import { HeaderListOfProducts } from './_components/headerListOfProducts/headerListOfProducts';

export function ListOfProducts() {
    return (
        <div className={style.container_of_products}>
            <HeaderListOfProducts />
            <div className={style.list_of_products}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}