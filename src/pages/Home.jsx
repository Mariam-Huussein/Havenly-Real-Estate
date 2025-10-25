import { useEffect } from "react";
import Hero from "../components/HomeModal/Hero";
import About from "../components/HomeModal/About";
import FrequentlyAskedQuestions from "../components/HomeModal/FrequentlyAskedQuestions";
import Cta from "../components/HomeModal/Cta";
import Testimonial from "../components/HomeModal/Testimonial";
import FeaturedProperties from "../components/HomeModal/FeaturedProperties";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      const section = document.getElementById("about");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
    }
  }, [location]);
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
