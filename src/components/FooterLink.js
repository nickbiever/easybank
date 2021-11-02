const FooterLink = ({ link, title }) => {
  return (
    <a href={link} className="p-2 md:p-0 md:pb-2">
      {title}
    </a>
  );
};

export default FooterLink;
