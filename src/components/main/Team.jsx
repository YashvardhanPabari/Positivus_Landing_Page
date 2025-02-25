import john from "./teamImages/john.png";
import jane from "./teamImages/jane.png";
import me from "./teamImages/me.png";
import emily from "./teamImages/emily.png";
import brian from "./teamImages/brian.png";
import sarah from "./teamImages/sarah.png";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="p-10">
      <div className="flex items-center gap-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
          font-semibold p-1"
          >
            Team
          </h2>
        </div>
        <div>
          <p>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies:
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-8 ">
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={john} alt="john" />
            </div>
            <div>
              <h2>John Smith</h2>
              <p>CEO and Founder</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              10+ years of experience in digital marketing, Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </div>
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={jane} alt="jane" />
            </div>
            <div>
              <h2>Jane Doe</h2>
              <p>Director of Operations</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              7+ years of experience in project management and team leadership.
              Strong orgranizational and communication skills
            </p>
          </div>
        </div>
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={me} alt="me" className="h-30" />
            </div>
            <div>
              <h2>Yashvardhan Pabari</h2>
              <p>Junior SE</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              1+ years of experience in Frontend, Expertise in React, Redux, JS,
              HTML/CSS
            </p>
          </div>
        </div>
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={emily} alt="emily" />
            </div>
            <div>
              <h2>Emily Johnson</h2>
              <p>PPC Manager</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              3+ years of experience in paid search advertising. Skilled in
              campaign management and performace analysis
            </p>
          </div>
        </div>
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={brian} alt="brian" />
            </div>
            <div>
              <h2>Brian Williams</h2>
              <p>Social Media Specialist</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              4+ years of experience in social media marketing. Proficient in
              creating and scheduling content.
            </p>
          </div>
        </div>
        <div className="w-80 border-1 rounded-4xl shadow-md shadow-black p-5 flex flex-col gap-4">
          <div className="flex items-end gap-2.5">
            <div className="flex justify-between">
              <img src={sarah} alt="sarah" />
            </div>
            <div>
              <h2>Sarah Kim</h2>
              <p>Content Creator</p>
            </div>
            <span className=" self-start">
              <FaLinkedin size={25} />
            </span>
          </div>

          <div className="border-t py-1">
            <p>
              2+ years of experience in writing and editing skilled in creating
              compelling, SEO optimized content for various industries
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-end mr-8">
        <button className="bg-black text-white p-3 rounded-xl">
          See all teams
        </button>
      </div>
    </div>
  );
};

export default Team;
