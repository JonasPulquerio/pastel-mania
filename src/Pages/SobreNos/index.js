import styles from "./SobreNos.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function SobreNos() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.sobrenos}>
                    <h1>Nossa Pastelaria</h1>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default SobreNos;