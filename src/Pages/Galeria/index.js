import styles from "./Galeria.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Galeria() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.galeria}>
                    <h1>Nossas Fotos</h1>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Galeria;