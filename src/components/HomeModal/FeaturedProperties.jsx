import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Item from "../Item";
import { fetchFeaturedProperties } from "../../helpers/propertiesHelper";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedProperties();
        setProperties(data.data);
        setTotalRecords(data.totalRecords);
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className="max-padd-container py-16 xl:py-22">
      <div className="rounded-3xl">
        <span className="medium-18">Your New Home Awaits!</span>
        <h2 className="h2">Discover Your Place Here</h2>
        <div className="flexBetween mt-8 mb-6">
          <h5>
            <span className="font-bold">Displaying 1–9</span> from {totalRecords} listings
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
            600 : { slidesPerView: 2, spaceBetween: 30 },
            1124: { slidesPerView: 3, spaceBetween: 30 },
            1300: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <Item property={property} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Link
              to="/listing"
              className="relative flex flex-col items-center justify-center h-[20rem] bg-[url('/images/img3.png')] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden ring-1 ring-slate-300 cursor-pointer group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
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
  );
};

export default FeaturedProperties;
