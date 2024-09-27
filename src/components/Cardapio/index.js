import styles from "./Cardapio.module.css";

function Cardapio({ dados: {name, preco, subName} }) {
    return (
        <section className={styles.cardapio}>
            <span>
                <h2>{name}</h2>
                <h2>{preco}</h2>
            </span>
            <p>{subName}</p>
        </section>
    );
}

export default Cardapio;