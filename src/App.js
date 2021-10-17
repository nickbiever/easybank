import { useState } from "react";

import Navbar from "./components/Navbar";
import MediumTitle from "./components/MediumTitle";
import InviteButton from "./components/InviteButton";
import IconText from "./components/IconText";
import Article from "./components/Article";
import FooterLink from "./components/FooterLink";

import bgMobile from "./images/bg-intro-mobile.svg";
import bgDesktop from "./images/bg-intro-desktop.svg";
import mockup from "./images/image-mockups.png";

import onlineBankingIcon from "./images/icon-online.svg";
import budgetingIcon from "./images/icon-budgeting.svg";
import onboardingIcon from "./images/icon-onboarding.svg";
import apiIcon from "./images/icon-api.svg";

import currencyImage from "./images/image-currency.jpg";
import restaurantImage from "./images/image-restaurant.jpg";
import airplaneImage from "./images/image-plane.jpg";
import confettiImage from "./images/image-confetti.jpg";

import logo from "./images/logo-white.svg";
import facebook from "./images/icon-facebook.svg";
import youtube from "./images/icon-youtube.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-public-sans text-base">
      <Navbar
        showMobileMenu={mobileMenuOpen}
        updateMobileMenu={setMobileMenuOpen}
      />
      <main className="relative">
        <div
          className={
            mobileMenuOpen
              ? "absolute inset-0 bg-gradient-to-b from-dark-blue z-10 h-screen w-full"
              : ""
          }
        ></div>
        <div className="bg-very-light-gray pb-16">
          <img
            src={bgMobile}
            className="relative object-cover w-full md:hidden"
            alt="Mobile background"
          />
          <img
            src={bgDesktop}
            className="hidden md:block"
            alt="Desktop background"
          />
          <img src={mockup} className="absolute -inset-y-16 p-4" alt="Mockup" />
          <h1 className="text-center text-4xl text-dark-blue font-light px-4">
            Next generation digital banking
          </h1>
          <p className="text-center text-grayish-blue p-4 mb-4">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <InviteButton />
        </div>
        <div className="bg-light-grayish-blue pt-12 pb-12">
          <MediumTitle title="Why choose EasyBank?" />
          <p className="text-center text-grayish-blue p-4 mb-4">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <IconText
            image={onlineBankingIcon}
            title="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world."
          />
          <IconText
            image={budgetingIcon}
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive
            notifications when you’re close to hitting your limits."
          />
          <IconText
            image={onboardingIcon}
            title="Fast Onboarding"
            text="We don’t do branches. Open your account in minutes online and
            start taking control of your finances right away."
          />
          <IconText
            image={apiIcon}
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier."
          />
        </div>
        <div className="bg-very-light-gray pt-12 pb-16">
          <MediumTitle title="Latest Articles" />
          <Article
            image={currencyImage}
            author="Claire Robinson"
            title="Receive money in any currency with no fees"
            text="The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …"
          />
          <Article
            image={restaurantImage}
            author="Wilson Hutton"
            title="Treat yourself without worrying about money"
            text="Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …"
          />
          <Article
            image={airplaneImage}
            author="Wilson Hutton"
            title="Take your Easybank card wherever you go"
            text="We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …"
          />
          <Article
            image={confettiImage}
            author="Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            text="After a lot of hard work by the whole team, we’re excited to
            launch our closed beta. It’s easy to request an invite through the
            site …"
          />
        </div>
        <footer className="bg-dark-blue text-white py-8">
          <img
            src={logo}
            alt="logo"
            className="h-6 justify-center m-auto mt-4"
          />
          <div className="flex items-center justify-center my-8">
            <img src={facebook} alt="Socialmedia icon" className="pr-4" />
            <img src={youtube} alt="Socialmedia icon" className="pr-4" />
            <img src={twitter} alt="Socialmedia icon" className="pr-4" />
            <img src={pinterest} alt="Socialmedia icon" className="pr-4" />
            <img src={instagram} alt="Socialmedia icon" className="" />
          </div>
          <div className="flex flex-col text-center mb-6">
            <FooterLink link="#" title="About Us" />
            <FooterLink link="#" title="Contact" />
            <FooterLink link="#" title="Blog" />
            <FooterLink link="#" title="Careers" />
            <FooterLink link="#" title="Support" />
            <FooterLink link="#" title="Privacy Policy" />
          </div>
          <InviteButton />
          <p className="text-center text-grayish-blue py-6">
            &copy; Easybank. All Rights Reserved
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
