import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="mt-[60px]   pt-20">
      <h2 className="xl:text-[40px] md:text-[40px] !leading-[1.3] text-3xl font-semibold text-center pb-[60px] xl:w-1/2 mx-auto">
        Learners love EduPath. See whythey rate us 4.9 out of 5
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={24}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper !pb-14"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#9998E133] border border-[#9998E180] rounded-[13px]   p-8">
              <div className="flex justify-between items-center pb-4">
                <img
                  className="rounded-full w-14 h-14"
                  src={testimonial.photoUrl}
                  alt=""
                />
                <img
                  className="w-[26px] h-[19px] "
                  src={testimonial.quoteIconUrl}
                  alt=""
                />
              </div>
              <h4 className="text-[16px] font-semibold pb-6">
                {testimonial.name}
              </h4>
              <p className="text-[16px]">{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
