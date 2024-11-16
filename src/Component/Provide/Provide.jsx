import ProvideImg from "../../../public/images/image44.png";
import VictorImg from "../../../public/images/Vector.svg";
import { AccordionCustomStyles } from "../AccordionCustomStyles/AccordionCustomStyles";
const Provide = () => {
  return (
    <div className=" xl:px-40 px-5">
      <div className="grid xl:grid-cols-2 grid-cols-1 ">
        <div className="xl:mr-[125px]">
          <h4 className="xl:text-[40px] text-3xl font-bold pb-12">
            We provide...
          </h4>
          <AccordionCustomStyles></AccordionCustomStyles>
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
          <img className="rounded-lg w-full" src={ProvideImg} alt="" />
          <div className="absolute top-[84px]  xl:-left-8  -left-5 bg-[#287279] w-[74px] h-[73.67px] rounded-full items-center justify-center flex border-[6px] border-white">
            <img className=" rounded-full w-10 h-10 " src={VictorImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
