import { useState } from "react";

const Testimonials = () => {
  const reviews = [
    "We have been working with Positivus for past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive and truly cares about success of our buisness By: Jane Doe",

    "We have been working with Positivus for past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive and truly cares about success of our buisness",
  ];

  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex items-center gap-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
          font-semibold p-1"
          >
            Testimonials
          </h2>
        </div>
        <div>
          <p>
            Hear from Our Satisfied Clients: Read Out Testimonials to learn More
            about Digital Marketing Services
          </p>
        </div>
      </div>

      <div className="w-full border bg-black text-white p-5 rounded-2xl">
        <div className="w-full max-w-md mx-auto text-center p-5 border-1 border-green-400 rounded-2xl shadow-md">
          <p>{reviews[index]}</p>

          <div className="flex justify-between mt-4">
            <button
              className=" px-3 py-1 hover:bg-gray-400"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="px-3 py-1  hover:bg-gray-400"
              onClick={nextSlide}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
