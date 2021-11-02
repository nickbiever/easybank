const IconText = ({ image, title, text }) => {
  return (
    <div className="mt-8">
      <img src={image} alt="Icon" className="flex m-auto md:m-0" />
      <h2 className="text-center text-xl text-dark-blue font-light py-4 md:text-left">
        {title}
      </h2>
      <p className="text-center text-grayish-blue px-4 pb-4 md:text-left md:pl-0 md:pr-8">
        {text}
      </p>
    </div>
  );
};

export default IconText;
