const Article = ({ image, author, title, text }) => {
  return (
    <div className="bg-white rounded-md m-4 mt-8">
      <img
        src={image}
        alt=""
        className="rounded-t-md w-full h-48 object-cover"
      />
      <div className="p-8">
        <p className="text-sm pb-2 text-grayish-blue">By {author}</p>
        <h2 className="text-2xl pb-2 text-dark-blue">{title}</h2>
        <p className="text-grayish-blue">{text}</p>
      </div>
    </div>
  );
};

export default Article;
