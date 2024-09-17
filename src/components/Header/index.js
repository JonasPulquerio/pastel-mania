import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>Pastel Mania</span>
            <nav>
                <a href="#">Início</a>
                <a href="#">Cardápio</a>
                <a href="#">Sobre Nós</a>
                <a href="#">Galeria</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    );
}

export default Header;
