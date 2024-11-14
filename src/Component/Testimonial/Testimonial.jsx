import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="mt-[60px] xl:px-40 px-5">
      <h2 className="text-[40px] font-semibold text-center pb-[60px]">
        Learners love EduPath. See why <br /> they rate us 4.9 out of 5
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
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
              <p>{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
