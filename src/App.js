import { useState } from "react";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import WhyEasyBank from "./components/WhyEasyBank";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";
import MobileMenuGradient from "./components/MobileMenuGradient";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-public-sans text-base">
      <header>
        <Navbar
          showMobileMenu={mobileMenuOpen}
          updateMobileMenu={setMobileMenuOpen}
        />
      </header>
      <main className="relative">
        <MobileMenuGradient isMenuOpen={mobileMenuOpen} />
        <Jumbotron />
        <WhyEasyBank />
        <LatestArticles />
        <Footer />
      </main>
    </div>
  );
}

export default App;
