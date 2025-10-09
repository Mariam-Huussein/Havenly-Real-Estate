import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules"; // import required modules
import { useAppContext } from "../context/AppContext";
import Item from "./Item";

const FeaturedProperties = () => {
  const { properties } = useAppContext();

  return (
    <>
      <section className="max-padd-container py-16 xl:py-22">
        <div className="rounded-3xl">
          <span className="medium-18">Your New Home Awaits!</span>
          <h2 className="h2">Discover Your Place Here</h2>
          <div className="flexBetween mt-8 mb-6">
            <h5>
              <span className="font-bold">Displaying 1–9</span> from 3k listings
            </h5>
            <Link
              className="bg-secondary/10 ring-1 ring-slate-900/15 text-2xl rounded-md p-2 flexCenter"
              to={"/listing"}
              onClick={() => scrollTo(0, 0)}
            >
              <TuneIcon />
            </Link>
          </div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1124: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
          >
            {properties.slice(0, 6).map((property) => (
              <SwiperSlide key={property.id}>
                <Item property={property} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Link
                to="/listing"
                className="relative flex flex-col items-center justify-center h-[20rem] bg-[url('/images/img3.png')] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden ring-1 ring-slate-300 cursor-pointer group"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

                {/* المحتوى فوق الـ overlay */}
                <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    See More Properties
                  </h3>
                  <p className="text-slate-200 text-sm mb-3">
                    Explore all our amazing listings
                  </p>
                  <button className="btn-dark group-hover:scale-105 transition-transform duration-300">
                    View All
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedProperties;
