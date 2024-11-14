import { FaCircleCheck } from "react-icons/fa6";
import ProvideImg from "../../../public/images/image44.png";
import VictorImg from "../../../public/images/Vector.svg";
const Provide = () => {
  return (
    <div className=" xl:px-[198px] px-5">
      <div className="grid xl:grid-cols-2 grid-cols-1 ">
        <div className="xl:mr-[146px]">
          <h4 className="xl:text-[40px] text-3xl font-bold">We provide...</h4>
          <div className="join join-vertical w-full pt-12">
            <div className="collapse collapse-arrow join-item border-base-300 border-b py-[17px]">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium flex items-center ">
                <FaCircleCheck className="mr-8"></FaCircleCheck> Personalized
                routine
              </div>
              <div className="collapse-content">
                <p>
                  Create a Personalized Daily Routine for Optimal Productivity,
                  Health, and Balance with These Easy Steps
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b py-[17px]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium flex items-center">
                <FaCircleCheck className="mr-8"></FaCircleCheck>
                Follow-up after completing courses
              </div>
              <div className="collapse-content">
                <p>
                  Advance your frontend skills after completing courses,
                  mastering JavaScript, React, and web development trends.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b py-[17px]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium flex items-center">
                <FaCircleCheck className="mr-8"></FaCircleCheck>
                Access to additional resources
              </div>
              <div className="collapse-content">
                <p>
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b py-[17px]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium flex items-center">
                <FaCircleCheck className="mr-8"></FaCircleCheck>
                Free community support
              </div>
              <div className="collapse-content">
                <p>
                  Join Our Free Community Support Program: Empowering
                  Connections, Sharing Knowledge, and Building Stronger
                  Together!
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <a
              className="px-6 py-4 border-2 text-[#287279] text-[14px] hover:bg-[#287279] hover:text-white transition-all duration-300 font-semibold rounded-[32px] border-[#287279]"
              href="#"
            >
              Learn More About Our Services
            </a>
          </div>
        </div>
        <div className="relative xl:pt-0 pt-14">
          <img className="rounded-lg" src={ProvideImg} alt="" />
          <div className="absolute top-[84px] xl:-left-8 -left-5 bg-[#287279] w-[74px] h-[73.67px] rounded-full items-center justify-center flex border-[6px] border-white">
            <img className=" rounded-full w-10 h-10 " src={VictorImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
