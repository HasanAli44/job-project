import CourseSlider from "../CourseSlider/CourseSlider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PopularCourses = () => {
  return (
    <div className="xl:px-40 px-5 xl:pt-[120px] xl:pb-[200px]  py-10 relative">
      <div className="flex relative justify-between">
        <div>
          <h2 className="xl:text-[40px] md:text-[40px] text-3xl font-bold">
            Our popular courses
          </h2>
          <p className="text-[16px] pt-6">
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, <br /> build resilience, and foster a sense of
            inner peace and balance
          </p>
        </div>
        <div className="flex items-center">
          <button className="custom-prev w-[56px] h-[56px] border border-black rounded-full flex items-center justify-center">
            <FaAngleLeft className="w-[22px] h-5"></FaAngleLeft>
          </button>
          <button className="custom-next ms-6 w-[56px] h-[56px] border border-black rounded-full flex items-center justify-center">
            <FaAngleRight className="w-[22px] h-5"></FaAngleRight>
          </button>
        </div>
      </div>
      <div>
        <CourseSlider></CourseSlider>
      </div>
    </div>
  );
};

export default PopularCourses;
