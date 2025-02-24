import main from "../../assets/main.png";

const Main = () => {
  return (
    <main className="flex flex-col md:flex-row items-center px-5 w-full min-h-[500px] md:h-[600px] ">
      <div className="flex flex-col gap-25 w-1/2 p-10">
        <h2 className="font-semibold text-6xl  ">
          Navigating the digital landscape for success
        </h2>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of service including SEO, PPC, social media marketing,
          and content creation
        </p>
        <button className="border rounded-lg p-1.5 text-white bg-black w-50">
          Book a consultation
        </button>
      </div>
      <div className="p-10">
        <img src={main} alt="speaker" />
      </div>
    </main>
  );
};

export default Main;
