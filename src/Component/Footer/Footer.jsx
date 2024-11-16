import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="xl:mt-[136px] py-[120px] xl:px-40 px-5 bg-[#F4F4F6]">
      <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 pb-10">
        <div className="xl:mb-0 mb-5">
          <p className="text-[13px] text-[#00000080]">Categories</p>
          <ul className="pt-8">
            <li className="">
              <a className="text-[16px] text-[#000000B3]" href="#">
                Nutrition and diet
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Fitness training
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Mindfulness
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Mental health
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Personal growth
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Social well-being
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:mb-0 mb-5">
          <p className="text-[13px] text-[#00000080]">About</p>
          <ul className="pt-8">
            <li className="">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                About us
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Our partners
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Investors
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:mb-0 mb-5">
          <p className="text-[13px] text-[#00000080]">Resources</p>
          <ul className="pt-8">
            <li className="">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                FAQ
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Refund policies
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Terms and conditions
              </a>
            </li>
            <li className="py-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Cookie
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Latest posts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] text-[#00000080]">Support</p>
          <ul className="pt-8">
            <li className="">
              <a className="text-[16px] text-[#000000B3]" href="#">
                Get in touch
              </a>
            </li>
            <li className="pt-3">
              <a className="text-[16px]  text-[#000000B3]" href="#">
                Visit our forum
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-2 border-dashed mt-5"></div>
      <div className="py-8 flex justify-between items-center">
        <h4 className="text-xl font-medium">Join our official channels</h4>
        <div className="flex">
          <a href="#">
            <AiFillInstagram className="text-[#00000080] w-[26px] h-[26px] mr-4"></AiFillInstagram>
          </a>
          <a href="#">
            <FaSquareXTwitter className="text-[#00000080] w-[24px] h-[24px] mr-4"></FaSquareXTwitter>
          </a>
          <a href="#">
            <BsFacebook className="text-[#00000080] w-[26px] h-[25.91px] mr-4"></BsFacebook>
          </a>
          <a href="#">
            <FaDiscord className="text-[#00000080] w-[30px] h-[23px]"></FaDiscord>
          </a>
        </div>
      </div>
      <div className="border-2 border-dashed "></div>
      <p className="pt-10 text-[#00000080] text-[13px]">
        © 2024 EduPath. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
