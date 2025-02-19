import style from './empty.module.css';

export function Empty() {
    return (
        <tr className={style.tr}>
            <td className={style.td}>
                <p>O carrinho está vazio</p>
                <p>você ainda não adicionou nenhum produto.</p>
            </td>
        </tr>
    )
}