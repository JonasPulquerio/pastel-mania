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
        <section className={styles.category}>
            <h1>{category}</h1>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;
