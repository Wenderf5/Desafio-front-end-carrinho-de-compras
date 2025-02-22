import style from './loading.module.css';

export function Loading() {
    return (
        <tr className={style.tr}>
            <td className={style.td}>
                <p>Carregando...</p>
            </td>
        </tr>
    )
}