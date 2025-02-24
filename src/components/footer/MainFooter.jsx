import amazon from "./images/amazon.png";
import dribbble from "./images/dribbble.png";
import hubSpot from "./images/hubSpot.png";
import notion from "./images/notion.png";
import netflix from "./images/netflix.png";
import zoom from "./images/zoom.png";

const MainFooter = () => {
  return (
    <footer className="flex  justify-around items-center ">
      <img src={amazon} alt="" />
      <img src={dribbble} alt="" />
      <img src={hubSpot} alt="" />
      <img src={notion} alt="" />
      <img src={netflix} alt="" />
      <img src={zoom} alt="" />
    </footer>
  );
};

export default MainFooter;
