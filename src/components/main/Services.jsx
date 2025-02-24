import { CgArrowTopRightO } from "react-icons/cg";
import glass from "./cardsImages/glass.png";
import advertising from "./cardsImages/advertising.png";
import analytics from "./cardsImages/analytics.png";
import content from "./cardsImages/content.png";
import smile from "./cardsImages/smile.png";
import message from "./cardsImages/message.png";
import star from "./cardsImages/star.png";

export const Services = () => {
  return (
    <div className="p-10">
      <div className="flex items-center gap-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
          font-semibold p-1"
          >
            Services
          </h2>
        </div>
        <div>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succedd online. These services include:
          </p>
        </div>
      </div>

      <div className="p-10 flex flex-wrap gap-6">
        <div className="bg-[#F3F3F3] flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-[#B9FF66] rounded-xl p-2">
              Search Engine Optimization
            </h2>
            <span className="flex items-center gap-2">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={glass} alt="" />
          </div>
        </div>

        <div className="bg-[#B9FF66] flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-white rounded-xl p-2">
              Pay-per-click Advertising
            </h2>
            <span className="flex items-center gap-2">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={advertising} alt="" />
          </div>
        </div>

        <div className="bg-black flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-white py-2 rounded-xl">Social Media Marketing</h2>
            <span className="flex items-center gap-2 text-white">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={smile} alt="" />
          </div>
        </div>

        <div className="bg-[#F3F3F3] flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-[#B9FF66] p-2 rounded-xl">Email Marketing</h2>
            <span className="flex items-center gap-2">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={message} alt="" />
          </div>
        </div>

        <div className="bg-[#B9FF66] flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-white p-2 rounded-xl">Content Creation</h2>
            <span className="flex items-center gap-2">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={content} alt="" />
          </div>
        </div>

        <div className="bg-black flex border-2 rounded-4xl w-full md:w-[48%] p-6">
          <div className="flex flex-col gap-15">
            <h2 className="bg-[#B9FF66] rounded-xl p-2">
              Analytics and Tracking
            </h2>
            <span className="flex items-center gap-2 text-white">
              <CgArrowTopRightO /> Learn more
            </span>
          </div>
          <div>
            <img src={analytics} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#F3F3F3] text-center md:text-left rounded-lg justify-center p-3 md:p-4">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-2">
          <h2 className="text-lg md:text-xl font-medium">
            Let's make things happen
          </h2>
          <p className="text-gray-700 max-w-xs text-xs md:text-sm leading-tight">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white px-2 py-1 rounded-lg w-auto text-xs">
            Get your free proposal
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
          <img
            src={star}
            alt="Star Icon"
            className="max-w-[50%] md:max-w-[40%] h-auto"
          />
        </div>
      </div>
    </div>
  );
};
