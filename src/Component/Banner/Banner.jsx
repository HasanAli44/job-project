import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import BannerImg from "../../../public/images/banner-img.png";
const Banner = () => {
  return (
    <div className="bg-[#F0F1EE] ">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-16 xl:px-40 px-5">
        <div className="py-10 my-auto">
          <div className="flex  items-center">
            <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
            <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
            <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
            <FaStar className="text-[#FF9700] text-xl mr-2"></FaStar>
            <FaRegStarHalfStroke className="text-[#FF9700] text-xl mr-2"></FaRegStarHalfStroke>
            <p className="text-2xl font-medium ">4.9 (566)</p>
          </div>
          <h1 className="text-5xl font-bold pt-6 !leading-[1.3]">
            #1 Platform <br /> Powering Health <br />
            and Wellness
          </h1>
          <p className="pt-10 text-3xl font-medium">
            We’re restoring home as the primary place of personal well-being
          </p>
          <p className="pt-6 text-[16px]">
            Health is not just about what you're eating. It's also about what
            you're thinking and saying
          </p>
          <div className="flex gap-4">
            <button className="bg-[#287279] w-[157px]  h-12 py-4 text-white rounded-[32px] mt-6 text-sm font-semibold flex items-center justify-center">
              Browse Courses
            </button>
            <button className="border-2 border-[#287279]  w-[157px]  h-12 py-4 text-[#287279] rounded-[32px] mt-6 text-sm font-semibold flex items-center justify-center">
              Browse Courses
            </button>
          </div>
        </div>
        <div className="">
          <img className="relative" src={BannerImg} alt="" />
          <div className="bg-[#FFFFFFB3]  absolute  bottom-8 px-9 py-[26px]  mx-3 rounded-xl z-0 ">
            <div className="flex ">
              <p className="text-5xl font-black pr-6 border-r border-black ">
                12,000+
              </p>
              <p className="text-2xl font-medium pl-6">
                Happy learners relybr <br />
                on us regularly
              </p>
            </div>
          </div>
          <div className="bg-[#FFFFFF99] absolute -bottom-4 flex items-center px-9 py-3 mx-3 rounded-xl ">
            <p className="text-[16px] font-medium pr-[34px]">
              Find your wellbeing
            </p>
            <p className="text-[13px]">
              By prioritizing self-care and making informed <br /> choices, one
              can enhance their overall quality of life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
