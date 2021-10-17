const FooterLink = ({ link, title }) => {
  return (
    <a href={link} className="p-2">
      {title}
    </a>
  );
};

export default FooterLink;
