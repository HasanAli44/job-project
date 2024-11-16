import { FaCircleCheck } from "react-icons/fa6";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="">
        <Accordion
          open={open === 1}
          className=" py-2 rounded-lg border-b border-blue-gray-100 px-4  overflow-hidden "
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors text-[#00000099] text-xl font-medium ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="flex items-center">
              <FaCircleCheck className="mr-8"></FaCircleCheck>
              Personalized routine
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base ml-12 font-normal text-[#000000B3] text-[13px]">
            Create a Personalized Daily Routine for Optimal Productivity,
            Health, and Balance with These Easy Steps
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="py-2 rounded-lg border-b border-blue-gray-100 px-4 "
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors text-[#00000099] text-xl font-medium ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="flex xl:items-center md:items-center">
              <FaCircleCheck className="xl:mr-8 md:mr-8 "></FaCircleCheck>
              Follow-up after completing courses
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base ml-12 text-[13px] text-[#000000B3] font-normal">
            Advance your frontend skills after completing courses, mastering
            JavaScript, React, and web development trends.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="rounded-lg border-b border-blue-gray-100 px-4 "
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors text-[#00000099]  text-xl font-medium ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="flex items-center">
              <FaCircleCheck className="mr-8"></FaCircleCheck>
              Access to additional resources
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base ml-12 text-[13px] text-[#000000B3] font-normal">
            We offer access to a variety of additional resources to enhance your
            experience, including exclusive tools, guides, and support materials
            designed to help you achieve your goals more effectively.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} className=" px-4 py-2  ">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors text-[#00000099] text-xl font-medium  ${
              open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="flex items-center">
              <FaCircleCheck className="mr-8"></FaCircleCheck>
              Free community support
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 ml-12 text-base text-[13px] text-[#000000B3] font-normal">
            Join Our Free Community Support Program: Empowering Connections,
            Sharing Knowledge, and Building Stronger Together!
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
