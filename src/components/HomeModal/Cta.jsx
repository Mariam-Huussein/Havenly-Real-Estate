import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const Cta = () => {
  return (
    <>
      <section className="bg-[#fffbee] mt-16 xl:mt-22">
        <div className="max-padd-container mx-2 md:mx-auto p-px">
          <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px]">
            <div className="flex items-center justify-center bg-black/80 text-white px-3 py-1.5 ring-1 ring-slate-900/10 gap-1 rounded-full text-xs">
              <RocketLaunchIcon sx={{ fontSize: 20 }} />
              <span>Trusted by Experts</span>
            </div>
            <h2 className="h2 mt-2 w-full lg:w-8/12">
              Sell or Rent Faster with{" "}
              <span className="text-secondary">Expert Strategies</span> and Real Support!
            </h2>
            <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">
              Achieve your goals faster with personalized strategies, hands-on
              support, and results that speak for themselves.
            </p>
            <button type="button" className="btn-secondary mt-4">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
