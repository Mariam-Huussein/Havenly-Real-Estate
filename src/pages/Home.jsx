import React from "react";
import Hero from "../components/HomeModal/Hero";
import About from "../components/HomeModal/About";
import FrequentlyAskedQuestions from "../components/HomeModal/FrequentlyAskedQuestions";
import Cta from "../components/HomeModal/Cta";
import Testimonial from "../components/HomeModal/Testimonial";
import FeaturedProperties from "../components/HomeModal/FeaturedProperties";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white">
      <Hero />
      <About />
      <FeaturedProperties />
      <FrequentlyAskedQuestions />
      <Cta />
      <Testimonial />
    </div>
  );
};

export default Home;
