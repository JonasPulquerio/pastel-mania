import Carousel from "../Carousel";
import styles from "./Banner.module.css";
import imagens from "./image.json";

function Banner() {
    return (
        <div className={styles.banner}>
            <Carousel>
                {imagens.map((img, indexKey) => (<img className={styles.imgBanner} src={img.imagem} alt="Pasteis Mais Pedidos" key={indexKey} />))}
            </Carousel>
        </div>
    );
}

export default Banner;
