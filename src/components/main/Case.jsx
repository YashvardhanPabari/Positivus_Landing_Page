import { LucideCirclePlus } from "lucide-react";
import { useState } from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { HiOutlineMinusCircle } from "react-icons/hi";

const Case = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex items-center gap-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
          font-semibold p-1"
          >
            Case Studies
          </h2>
        </div>
        <div>
          <p>
            Explore Real-life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-center bg-black rounded-2xl p-6">
        {/* Section 1 */}
        <div className="w-1/3 px-4 text-white">
          <p className="text-sm">
            For a local restaurant, we implemented a targeted PPC Campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <p className="flex justify-center items-center gap-1 cursor-pointer text-gray-300 hover:text-white">
            Learn more <CgArrowTopRightO />
          </p>
        </div>

        {/* Divider Line */}
        <div className="h-16 border-r border-gray-500"></div>

        {/* Section 2 */}
        <div className="w-1/3 px-4 text-white">
          <p className="text-sm">
            For a B2B a software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <p className="flex justify-center items-center gap-1 cursor-pointer text-gray-300 hover:text-white">
            Learn more <CgArrowTopRightO />
          </p>
        </div>

        {/* Divider Line */}
        <div className="h-16 border-r border-gray-500"></div>

        {/* Section 3 */}
        <div className="w-1/3 px-4 text-white">
          <p className="text-sm">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales
          </p>
          <p className="flex justify-center items-center gap-1 cursor-pointer text-gray-300 hover:text-white">
            Learn more <CgArrowTopRightO />
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 mt-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
          font-semibold p-1"
          >
            Our Working Process
          </h2>
        </div>
        <div>
          <p>Step-by-Step Guide to Achieving Your Buisness Goals</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              01 Consultation
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>

        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              02 Research and Strategy Development
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              03 Implementation
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              04 Monitoring and Optimization
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              05 Reporting and Communication
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300 shadow-md shadow-black rounded-md bg-[#F3F3F3] p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold shadow-b-md">
              06 Continual Improvement
            </h1>
            <button onClick={() => setShow(!show)}>
              {show ? (
                <HiOutlineMinusCircle size={20} />
              ) : (
                <LucideCirclePlus size={20} />
              )}
            </button>
          </div>
          {show && (
            <div className="border-t border-gray-400 mt-3 pt-3">
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Case;
