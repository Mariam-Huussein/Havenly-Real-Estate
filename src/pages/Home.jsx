import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";
import FeaturedProperties from "../components/FeaturedProperties";

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
