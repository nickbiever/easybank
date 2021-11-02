const MobileMenuGradient = ({ isMenuOpen }) => {
  return (
    <div
      className={
        isMenuOpen
          ? "absolute inset-0 bg-gradient-to-b from-dark-blue z-10 h-screen w-full"
          : ""
      }
    ></div>
  );
};

export default MobileMenuGradient;
