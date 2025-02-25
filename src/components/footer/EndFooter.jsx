import logoWhite from "../../assets/logoWhite.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Link } from "react-scroll";

const EndFooter = () => {
  return (
    <footer className="bg-black text-white p-5 flex flex-col gap-8 rounded-md">
      <div className="flex text-center justify-between">
        <div className="flex items-center justify-between">
          <img src={logoWhite} alt="logo" className="w-30" />
        </div>
        <div>
          <ul className="flex gap-5 underline">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="case"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                href=""
              >
                Use Cases
              </Link>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <span>
            <CiLinkedin size={30} />
          </span>
          <span>
            <CiFacebook size={30} />
          </span>
          <span>
            <TiSocialTwitterCircular size={30} />
          </span>
        </div>
      </div>

      <div className="flex">
        <div className=" flex-1 flex flex-col gap-2">
          <div>
            <h2 className="bg-[#B9FF66] inline text-black font-semibold">
              Contact us:
            </h2>
          </div>

          <p>Email: info@positivus.com</p>
          <p>555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 1234
          </p>
        </div>
        <div className="flex-[2] p-5">
          <div className="bg-[#292A32] flex justify-center text-center gap-6 w-120 p-10">
            <input
              type="email"
              placeholder="Email"
              className="border-1 border-white rounded-md p-2"
            />
            <button className="bg-[#B9FF66] text-black font-medium rounded-md p-2">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-white flex gap-9">
        <p>@ 2023 Positivus. All Rights Reserved.</p>
        <p className="underline">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default EndFooter;
