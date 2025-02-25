import Message from "./Message";
import halfStar from "../../assets/halfStar.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [radioQuote, setRadioQuote] = useState(false);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/quotes");
        setData(response.data.quotes);
        console.log("API Response:", response.data.quotes[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [radioQuote]);

  const handleQuoteSelection = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]); // Store selected quote
    }
  };

  return (
    <div className="p-10  flex flex-col gap-5 bg-[#F3F3F3]">
      <div className="flex items-center gap-5 ">
        <div>
          <h2
            className="bg-[#B9FF66] rounded-md text-2xl 
        font-semibold p-1"
          >
            Contact US
          </h2>
        </div>
        <div>
          <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <div className="flex gap-5">
            <div>
              <input
                type="radio"
                name="contactOption"
                onClick={() => setSelectedOption("message")}
              />
              <label htmlFor=""> Say hi</label>
            </div>
            <div>
              <input
                type="radio"
                name="contactOption"
                onClick={() => {
                  setRadioQuote(!radioQuote);
                  setSelectedOption("quote");
                  handleQuoteSelection();
                }}
              />
              <label htmlFor=""> Get a Quote</label>
            </div>
          </div>
          {selectedOption === "message" ? (
            <Message />
          ) : (
            randomQuote && (
              <div className="flex items-center justify-center h-[300px] ">
                <p className="font-semibold text-2xl">
                  {randomQuote.quote} <br />
                  <span className="text-lg">— {randomQuote.author}</span>
                </p>
                <p></p>
              </div>
            )
          )}
        </div>
        <div className="w-1/2">
          <img src={halfStar} alt="half star" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
