import SectionTitle from "../../../componentes/SectionTitle";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
       .then(res => res.json())
       .then(data => {
        setReviews(data)
       })
    } , [])
    return (
        <section>
            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}/>
            <Swiper
        dir="rtl"
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
   
        
        {
            reviews.map( (review , idx) => <SwiperSlide
            key={idx}>
                <div className="m-24">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
    //   onChange={setRating}
      isDisabled
    />
                    <h1></h1>
                    <p>{review.details}</p>
                    <p className="text-orange-500">{review.name}</p>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
        </section>
    );
};

export default Testimonial;