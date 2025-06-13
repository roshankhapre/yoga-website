import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkshopSection from "./components/WorkshopSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import WhatYouLearn from "./components/WhatYouLearn";
import AboutTrainer from "./components/AboutTrainer";
import WorkshopHighlights from "./components/WorkshopHighlights";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutTrainer />
      <WhatYouLearn />

      <WorkshopHighlights />

      <TestimonialSection />
      <FinalCTA />
      <FAQ />
      <Register />
      <Footer />
    </>
  );
}
export default App;
