import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-screen bg-[url('/images/Hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-padd-container h-screen w-screen">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          {/* Container */}
          <div className="relative flex justify-end mx-auto flex-col gap-4 h-full py-6 sm:pt-18 z-10">
            {/* Content */}
            <div className="flex flex-col mt-12 text-white">
              <button className="max-w-max flex items-center space-x-3 border border-white medium-13 rounded-full px-4 pr-1 py-1.5 cursor-pointer">
                <span>Explore how we simplify stays and spaces</span>
                <span className="flexCenter size-6 p-1 rounded-full bg-white">
                  <ArrowRightAltOutlinedIcon
                    sx={{ fontSize: 20, color: "black" }}
                  />
                </span>
              </button>
              <h2 className="h2 capitalize leading-tight mt-3 my-2 text-white text-stroke">
                Explore{" "}
                <span className="relative inline-block font-bold text-transparent bg-clip-text shimmer-text text-stroke">
                  exceptional properties
                </span>{" "}
                located in stunning surroundings.
              </h2>
            </div>
            <SearchForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
