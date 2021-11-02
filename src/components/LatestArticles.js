import MediumTitle from "./MediumTitle";
import Article from "./Article";
import currencyImage from "../images/image-currency.jpg";
import restaurantImage from "../images/image-restaurant.jpg";
import airplaneImage from "../images/image-plane.jpg";
import confettiImage from "../images/image-confetti.jpg";

const LatestArticles = () => {
  return (
    <section className="bg-very-light-gray pt-12 pb-16">
      <div className="container mx-auto">
        <MediumTitle title="Latest Articles" />
        <div className="md:flex md:flex-row md:space-x-8">
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
      </div>
    </section>
  );
};

export default LatestArticles;
