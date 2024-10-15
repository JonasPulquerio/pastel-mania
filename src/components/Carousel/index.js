import Slider from "react-slick/lib/slider";
import "./carousel.css"

function Carousel({ children }) {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        centerMode: true,
    };

    return (
        <div class="carousel">
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;