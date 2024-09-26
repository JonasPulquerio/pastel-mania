import styles from "./Banner.module.css";
//import img from "./image.json";

function Banner({ image }) {

    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url('/images/banner${image}.png')` }}
        ></div>
    );
}

export default Banner;
