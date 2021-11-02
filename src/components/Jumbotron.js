import bgMobile from "../images/bg-intro-mobile.svg";
import bgDesktop from "../images/bg-intro-desktop.svg";
import mockup from "../images/image-mockups.png";
import InviteButton from "./InviteButton";

const Jumbotron = () => {
  return (
    <section className="bg-very-light-gray pb-16">
      <div className="container mx-auto md:flex md:flex-row-reverse md:justify-center">
        <div className="md:h-96">
          <img
            src={bgMobile}
            className="relative object-cover w-full md:hidden"
            alt="Mobile background"
          />
          <img
            src={bgDesktop}
            className="hidden relative md:block md:-inset-y-10"
            alt="Desktop background"
          />
          <img
            src={mockup}
            className="absolute -inset-y-16 p-4 md:-inset-y-32 md:h-2/5 md:p-0"
            alt="Mockup"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center md:mr-96">
          <h1 className="text-center text-4xl text-dark-blue font-light px-4 md:text-left md:px-0">
            Next generation digital banking
          </h1>
          <p className="text-center text-grayish-blue p-4 mb-4 md:text-left md:px-0">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <InviteButton />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
