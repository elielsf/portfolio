import styles from './Header.module.css';
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <div className={styles.cabecalho}>
            <button className={styles.botaoInicio}>Home</button>
            <button className={styles.botaoSobre}>About me</button>
            <img src={Logo} alt="" className={styles.logoHeader} />
            <button className={styles.botaoProjetos}>Projects</button>
            <button className={styles.botaoHabilidades}>Skills</button>
        </div>
    )
}