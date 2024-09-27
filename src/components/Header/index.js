import styles from "./Header.module.css";
import img from "./logotipo.png";

function Header() {
    return (
        <header className={styles.header}>
            <img src={img}></img>
            <span>Pastel Mania</span>
            <nav>
                <a href="#">Início</a>
                <a href="#">Sobre Nós</a>
                <a href="#">Galeria</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    );
}

export default Header;
