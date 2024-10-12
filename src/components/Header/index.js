import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./logotipo.png";
import { useState } from "react";


function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => { setShowMenu(!showMenu)

    }

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img className={styles.logotipo} src={img} alt="Logotipo" />
                    <span className={styles.titulo}>Pastel Mania</span>
                </Link>
            </div>
            <nav
            className={`${styles.navMenu} ${ showMenu ? styles.show : '' }`}
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
        </header>
    );
}

export default Header;
