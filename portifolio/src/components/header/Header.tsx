import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.cabecalho}>
            <button className={styles.botaoInicio}>Home</button>
            <button className={styles.botaoSobre}>About me</button>
            <img src="" alt="" className={styles.logoHeader} />
            <button className={styles.botaoProjetos}>Projects</button>
            <button className={styles.botaoHabilidades}>Skills</button>
        </div>
    )
}