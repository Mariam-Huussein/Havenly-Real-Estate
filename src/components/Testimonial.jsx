import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
  ];

  return (
    <>
      <section className="max-padd-container py-16 xl:py-22">
        <div className="marquee-row overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#fffbee] to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#fffbee] to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-transparent to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
