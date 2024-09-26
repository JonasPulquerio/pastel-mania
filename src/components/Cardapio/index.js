import styles from "./Cardapio.module.css";

function Cardapio() {
    return (
        <section className={styles.cardapio}>
            <h1>PASTÉIS SIMPLES</h1>
            <section className="nome">
                <span>
                    <h2>Carne</h2>
                    <h2>Frango</h2>
                    <h2>Queijo</h2>
                    <h2>Misto</h2>
                    <h2>Mussarela</h2>
                    <h2>Calabresa</h2>
                </span>
                <span id="valor">
                    <h2>R$5,00</h2>
                    <h2>R$5,00</h2>
                    <h2>R$5,00</h2>
                    <h2>R$5,00</h2>
                    <h2>R$5,00</h2>
                    <h2>R$5,00</h2>
                </span>
            </section>
        </section>
    );
}

export default Cardapio;