import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../componentes/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle  subHeading={'From 11 to 10pm'}
        heading={"Order Online"}/>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} />
            <h3 className='text-4xl -mt-16 text-center uppercase text-white'>Salad</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide2} />
            <h3 className='text-4xl -mt-16 text-center uppercase text-white'>pizzas</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide3} />
            <h3 className='text-4xl -mt-16 text-center uppercase text-white'>Soups</h3>
        </SwiperSlide>

        <SwiperSlide>
        <img src={slide4} />
        <h3 className='text-4xl -mt-16 text-center uppercase text-white'>desserts</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide5} />
            <h3 className='text-4xl -mt-16 text-center uppercase text-white'>Salad-2</h3>
        </SwiperSlide>

      </Swiper>
      </section>
    );
};

export default Category;