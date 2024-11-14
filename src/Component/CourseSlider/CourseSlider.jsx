import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiTimerFill } from "react-icons/pi";
import { PiBookOpenTextFill } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";

const CourseSlider = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setPopularCourses(data));
  }, []);
  return (
    <div className="mt-[60px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {popularCourses.map((course, index) => (
          <SwiperSlide key={index}>
            <div
              className="border rounded-[13px] hover:border hover:border-[#9998E1] hover:shadow-xl transition-all duration-300
            "
            >
              <img
                className="w-[400px] h-[230px] rounded-tl-[13px] rounded-tr-[13px]"
                src={course.card_image}
                alt=""
              />
              <div className="hover:bg-[#9998E11A] px-6 py-6 ">
                <div className=" flex ">
                  <p className="bg-[#FF97001A] px-2 py-1 rounded-[5px] text-[13px] border-2 border-[#FF970080] text-center mr-2">
                    {course.level}
                  </p>
                  <p className="bg-[#CDE53333] px-2 py-1 rounded-[5px] text-[13px] border-2 border-[#CDE533] text-center">
                    {course.category}
                  </p>
                </div>
                <p className="text-2xl font-medium pt-4">{course.title}</p>

                <div className="flex  items-center pt-4">
                  <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
                  <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
                  <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
                  <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
                  <FaStarHalfAlt className="text-[#FF9700] text-xl mr-2"></FaStarHalfAlt>
                  <p className="text-2xl font-medium ">
                    {course.rating} <span>({course.reviews})</span>
                  </p>
                </div>
                <div className="pt-[58px] flex pb-4">
                  <div className="flex items-center pr-4 border-r border-[#00000033] ">
                    <PiTimerFill className="w-[18px] h-[24px] text-[#9998E1] mr-2"></PiTimerFill>
                    <p className="">{course.duration}</p>
                  </div>
                  <div className="flex items-center pl-4">
                    <PiBookOpenTextFill className="w-[18px] h-[24px] text-[#9998E1] mr-2"></PiBookOpenTextFill>
                    <p className="">{course.lessons} Lessons</p>
                  </div>
                </div>
                <hr />
                <div className="pt-4  flex justify-between">
                  <div className="flex">
                    <img
                      className="rounded-full mr-2"
                      src={course.instructor.avatar}
                      alt=""
                    />
                    <p className="my-auto text-[16px] font-semibold">
                      {course.instructor.name}
                    </p>
                  </div>
                  <p className="my-auto text-2xl font-medium">
                    ${course.price}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
