import InviteButton from "./InviteButton";
import FooterLink from "./FooterLink";
import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-8">
      <div className="container mx-auto md:flex md:justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-6 justify-center m-auto mt-4 md:m-0"
          />
          <div className="flex items-center justify-center my-8 md:justify-start md:mb-0">
            <img src={facebook} alt="Socialmedia icon" className="pr-4" />
            <img src={youtube} alt="Socialmedia icon" className="pr-4" />
            <img src={twitter} alt="Socialmedia icon" className="pr-4" />
            <img src={pinterest} alt="Socialmedia icon" className="pr-4" />
            <img src={instagram} alt="Socialmedia icon" className="" />
          </div>
        </div>
        <div className="text-center mb-6 md:text-left md:flex md:flex-row md:space-x-32 md:mb-0">
          <div className="flex flex-col">
            <FooterLink link="#" title="About Us" />
            <FooterLink link="#" title="Contact" />
            <FooterLink link="#" title="Blog" />
          </div>
          <div className="flex flex-col">
            <FooterLink link="#" title="Careers" />
            <FooterLink link="#" title="Support" />
            <FooterLink link="#" title="Privacy Policy" />
          </div>
        </div>
        <div>
          <div className="md:flex md:justify-end">
            <InviteButton />
          </div>
          <p className="text-center text-grayish-blue py-6 md:pb-0">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
