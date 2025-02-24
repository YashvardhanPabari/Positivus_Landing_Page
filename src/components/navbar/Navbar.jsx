import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

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
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Use Cases</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li className="border-1 rounded-sm p-3">
            <a href="">Request a quote</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
