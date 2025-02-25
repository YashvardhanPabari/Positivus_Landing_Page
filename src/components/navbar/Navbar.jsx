import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center p-1">
      <div>
        <img src={logo} alt="logo" className="w-30" />
      </div>

      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div
        className={`lg:flex lg:items-center lg:gap-10  ${
          isOpen ? "flex flex-col absolute top-16 left-0 w-full p-5" : "hidden"
        } lg:static lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-10 gap-5 items-center">
          <li>
            <a>About us</a>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              href=""
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
              href=""
            >
              Blog
            </Link>
          </li>
          <li className="border-1 rounded-sm p-3">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              href=""
            >
              Request a quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
