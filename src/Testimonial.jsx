import { Navigation, Pagination, Scrollbar, Autoplay,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Testimonial() {
 
  return (
    
    <section className="testimonial section">
      <h2 className="section__title">
        ¿Qué opinan los demás sobre mi trabajo como desarrollador?
      </h2>

      <div className="testimonial__container container">
            <div className="testimonial__swiper">
            <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
    loop={true}
    spaceBetween={32}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')} 
    autoplay={{
      delay: 3000, // 3000 milisegundos = 3 segundos
      disableOnInteraction: false,
    }} 
    >
      <SwiperSlide><article className="testimonial__card">
                <div className="testimonial__border">
                  <img src="dev.png" alt="image" className="testimonial__img" />
                </div>

                <h2 className="testimonial__name">Javier Bancayán</h2>

                <p className="testimonial__description">
                  Excelente trabajo!
                </p>
              </article></SwiperSlide>
      <SwiperSlide><article className="testimonial__card">
                <div className="testimonial__border">
                  <img src="dev.png" alt="image" className="testimonial__img" />
                </div>

                <h2 className="testimonial__name">Jenny Ruiz</h2>

                <p className="testimonial__description">
                  Muy buen diseño de página web
                </p>
              </article></SwiperSlide>
      <SwiperSlide><article className="testimonial__card">
                <div className="testimonial__border">
                  <img src="dev.png" alt="image" className="testimonial__img" />
                </div>

                <h2 className="testimonial__name">Luis Fernando</h2>

                <p className="testimonial__description">
                  Muy satisfecho con mi página
                </p>
              </article></SwiperSlide>
      <SwiperSlide><article className="testimonial__card">
                <div className="testimonial__border">
                  <img src="dev.png" alt="image" className="testimonial__img" />
                </div>

                <h2 className="testimonial__name">Raul Pinillos</h2>

                <p className="testimonial__description">
                  Me encantó el trabajo que hizo desarrollando mi web
                </p>
              </article></SwiperSlide>
     
    </Swiper>
              <div>      
              </div>
            </div>
         </div>
    </section>
  );
}
