import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./logotipo.png";
import { useState } from "react";


function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)

    }

    return (
        <section className={styles.header}>
            <Link to="/"><img className={styles.logotipo} src={img} alt="Logotipo" /></Link>
            <Link className={styles.titulo} to="/">Pastel Mania</Link>
            <nav
                className={`${styles.navMenu} ${showMenu ? styles.show : ''}`}
            >
                <Link to="/">Início</Link>
                <Link to="/sobreNos">Sobre Nós</Link>
                {/* <Link to="/galeria">Galeria</Link> */}
            </nav>
            <div className={styles.menuButton}
                onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </section>
    );
}

export default Header;
