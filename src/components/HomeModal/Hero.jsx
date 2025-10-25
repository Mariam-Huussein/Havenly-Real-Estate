import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SearchForm from "./SearchForm";

const Hero = () => {
  const cities = ["Abu Dhabi", "New York", "Toronto", "Los Angeles"];
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
            {/* Search / Booking Form */}
            {/* <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 lg:gap-x-8 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative">
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <PlaceOutlinedIcon />
                  <label htmlFor="destinationInput">Destination</label>
                </div>
                <input
                  list="destinations"
                  id="destinationInput"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="Type here"
                  required=""
                  type="text"
                />
                <datalist id="destinations">
                  {cities.map((city, index) => (
                    <option value={city} key={index} />
                  ))}
                </datalist>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <CalendarMonthOutlinedIcon />
                  <label htmlFor="checkIn">Check in</label>
                </div>
                <input
                  id="checkIn"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  type="date"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <CalendarMonthOutlinedIcon />
                  <label htmlFor="checkOut">Check out</label>
                </div>
                <input
                  id="checkOut"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  type="date"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <PersonIcon />
                  <label htmlFor="guests">Guests</label>
                </div>
                <input
                  min="1"
                  max="4"
                  id="guests"
                  className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="0"
                  type="number"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-6 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
              >
                <SearchIcon />
                <span>Search</span>
              </button>
            </form> */}
            <SearchForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
