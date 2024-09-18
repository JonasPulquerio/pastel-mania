import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>Pastel Mania</h2>
            <h4>O Sabor que Vícia!</h4>
            <h5>&copy; Desenvolvido por Jonas Pulquério</h5>
            <h6>Todas as imagens contidas no site são meramente ilustrativas.</h6>
        </footer>
    );
}

export default Footer;
