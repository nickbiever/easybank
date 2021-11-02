import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import InviteButton from "./InviteButton";

const Navbar = ({ showMobileMenu, updateMobileMenu }) => {
  return (
    <nav className="z-50 w-full md:bg-white fixed justify-center md:relative flex flex-col md:flex-row md:justify-between md:container md:mx-auto">
      <div className="w-full bg-white md:w-auto inline-flex justify-between p-5 md:pl-0">
        <a href="#" className="flex justify-center">
          <img src={logo} className="self-center" />
        </a>

        <button
          className="md:hidden"
          onClick={() => updateMobileMenu(!showMobileMenu)}
        >
          <img src={hamburgerIcon} />
        </button>
      </div>
      <ul
        className={
          "text-center md:flex md:flex-row m-6 md:m-0 p-4 md:p-5 md:space-x-16 rounded-md bg-white md:text-grayish-blue " +
          (showMobileMenu ? "block" : "hidden")
        }
      >
        <li className="py-2 md:py-0">
          <a href="#">Home</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#">About</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#">Contact</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#">Blog</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#">Careers</a>
        </li>
      </ul>

      <div className="hidden md:block md:py-3">
        <InviteButton />
      </div>
    </nav>
  );
};

export default Navbar;
