import React from "react"
import './Review.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Review() {
    const DataReview = [
        {
            name: 'Kevin Andrianto',
            institute: 'Universitas Malut',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt',
            profile: ''
        },
        {
            name: 'Ilyas Nur Aufar',
            institute: 'Universitas Palu',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt',
            profile: ''
        },
        {
            name: 'Jhon Efandi',
            institute: 'Universitas klolo',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt',
            profile: ''
        },
        {
            name: 'Rianto Andre',
            institute: 'Universitas banten',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt',
            profile: ''
        },
    ]

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true, // Pastikan tombol tetap terlihat
                }
            }
        ]
    };
    

    return (
        <div className="review-container">
            <div className="carousel">
            <Slider {...settings}>
            {DataReview.map((data, index) => (
                <div key={index} className="review-card">
                    <div className="image">

                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt</p>
                        <h4>{data.name} - {data.institute}</h4>
                    </div>
                </div>
            ))}
            </Slider>
            </div>
        </div>
    )
}