import MediumTitle from "./MediumTitle";
import IconText from "./IconText";
import onlineBankingIcon from "../images/icon-online.svg";
import budgetingIcon from "../images/icon-budgeting.svg";
import onboardingIcon from "../images/icon-onboarding.svg";
import apiIcon from "../images/icon-api.svg";

const WhyEasyBank = () => {
  return (
    <section className="bg-light-grayish-blue pt-12 pb-12">
      <div className="container mx-auto">
        <MediumTitle title="Why choose EasyBank?" />
        <p className="text-center text-grayish-blue p-4 mb-4 md:text-left md:px-0">
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br className="hidden md:block" />
          Control your finances like never before.
        </p>
        <div className="md:flex md:flex-row">
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
      </div>
    </section>
  );
};

export default WhyEasyBank;
