import styles from "./Banner.module.css";
import React from "react";
import banner11 from "../../../public/images/banner11.png"
import banner22 from "../../../public/images/banner11.png"
import banner33 from "../../../public/images/banner11.png"
import banner44 from "../../../public/images/banner11.png"
import banner55 from "../../../public/images/banner11.png"
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {

    const data = [
        {id:'1' image: <img src={banner11.png} />},
        {id:'1' image: <img src={banner22.png} />},
        {id:'1' image: <img src={banner33.png} />},
        {id:'1' image: <img src={banner44.png} />},
        {id:'1' image: <img src={banner55.png} />}
    ]

    return (
        <div className={styles.banner}>
            <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt="Slider"
                        className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
