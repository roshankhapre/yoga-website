// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Sections
import HeroSection from "./components/HeroSection";
import WorkshopSection from "./components/WorkshopSection";
import TestimonialSection from "./components/TestimonialSection";
import WhatYouLearn from "./components/WhatYouLearn";
import AboutTrainer from "./components/AboutTrainer";
import WorkshopHighlights from "./components/WorkshopHighlights";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Register from "./components/Register";

// Pages
import AboutUS from "./components/AboutUS";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTrainer />
      <WhatYouLearn />
      <WorkshopHighlights />
      <TestimonialSection />
      <FinalCTA />
      <FAQ />
      <Register />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/WorkshopHighlights" element={<WorkshopHighlights />} />
        <Route path="/TestimonialSection" element={<TestimonialSection />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
