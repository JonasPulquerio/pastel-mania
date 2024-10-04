import styles from "./Banner.module.css";
// import imagens from "./image.json";
import images from "./images/banner33.png";


function Banner() {

    return (
        <div className={styles.banner}>
           <img src={images}/>
        </div>
    );
}

export default Banner;
