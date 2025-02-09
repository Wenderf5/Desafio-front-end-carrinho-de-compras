import style from './sumary_mobile.module.css';

export function Sumary_mobile() {
    return (
        <footer className={style.footer}>
            <p className={style.text_resumo_da_compra}>Resumo da compra</p>
            <div className={style.sumary}>
                <div className={style.sub_total}>
                    <p>Frete</p>
                    <p>Gratuito</p>
                </div>
                <div className={style.sub_total}>
                    <p>Total</p>
                    <p>R$ 418,00</p>
                </div>
                <p className={style.add_cupom}>Adicionar cupom de desconto</p>
            </div>
            <p className={style.btn_buy}>Finalizar compra</p>
        </footer>
    )
}