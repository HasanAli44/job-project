import CourseSlider from "../CourseSlider/CourseSlider";

const PopularCourses = () => {
  return (
    <div className="xl:px-40 px-5 xl:py-[120px]  py-10">
      <h2 className="text-[40px] font-bold">Our popular courses</h2>
      <p className="text-[16px] pt-6">
        By taking proactive steps to nurture mental health, we can enhance our
        quality of life, <br /> build resilience, and foster a sense of inner
        peace and balance
      </p>
      <div>
        <CourseSlider></CourseSlider>
      </div>
    </div>
  );
};

export default PopularCourses;
