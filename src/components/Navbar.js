import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";

const Navbar = ({ showMobileMenu, updateMobileMenu }) => {
  return (
    <nav className="z-50 w-full fixed justify-center md:static inline-flex flex-col md:flex-row md:justify-between">
      <div className="w-full bg-white md:w-auto inline-flex justify-between p-5">
        <a href="#">
          <img src={logo} />
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
          "text-center md:flex md:flex-row m-6 md:m-0 p-4 md:p-0 rounded-md bg-white " +
          (showMobileMenu ? "block" : "hidden")
        }
      >
        <li className="py-2 md:pl-5">
          <a href="#">Home</a>
        </li>
        <li className="py-2 md:pl-5">
          <a href="#">About</a>
        </li>
        <li className="py-2 md:pl-5">
          <a href="#">Contact</a>
        </li>
        <li className="py-2 md:pl-5">
          <a href="#">Blog</a>
        </li>
        <li className="py-2 md:pl-5">
          <a href="#">Careers</a>
        </li>
        <li className="py-2 md:pl-5 hidden md:block">
          <a href="#">Request Invite</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
