import pasteis from "../../json/db.json";
import styles from "./Category.module.css";

export const categories = [
    "PASTÉIS SIMPLES",
    "PASTÉIS ESPECIAIS",
    "COMBOS",
    "BEBIDAS"
]

export function filterCategory(dados) {
    return pasteis.filter(pastel => pastel.category === categories[dados])
}

function Category({ category, children }) {
    return (
        <div className={styles.test}>
            <section className={styles.category}>
                <h1 className={styles.categoryTitulo}>{category}</h1>
                <div className={styles.cardapio}>
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Category;
