import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MapIcon from "@mui/icons-material/Map";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Title from "../Title";
const About = () => {
  const clientsImage = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];
  const star = `                    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#FACC15"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>`;

  return (
    <>
      <section className="max-padd-container py-16 xl:py-28 !pt-36">
        {/* Container */}
        <div className="flex items-center flex-col lg:flex-row gap-12">
          {/* Info (Left Side) */}
          <div className="flex-1">
            <Title
              title1={"Your Trusted Real Estate Partner"}
              title2={"Helping You Every Step of the Way"}
              paragraph={
                "Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy."
              }
              titleStyles={"mb-10"}
            />
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex gap-3">
                <EventAvailableOutlinedIcon className="text-secondary" />
                <p>In-app scheduling for property viewings</p>
              </div>
              <div className="flex gap-3">
                <AutoGraphIcon className="text-secondary" />
                <p>Real-time market price updates</p>
              </div>
              <div className="flex gap-3">
                <MapIcon className="text-secondary" />
                <p>User-friendly interface for smooth navigation</p>
              </div>
              <div className="flex gap-3">
                <AttachMoneyIcon className="text-secondary" />
                <p>Access to off-market properties</p>
              </div>
            </div>
            <div className="flex items-center divide-x divide-gray-300 mt-11">
              {/* Clients */}
              <div className="flex flex-wrap gap-y-4 sm:justify-start justify-center items-center divide-x divide-gray-300">
                <div className="flex -space-x-3 pr-3">
                  {clientsImage.map((clientImage, index) => (
                    <img
                      key={index}
                      src={clientImage}
                      alt="image"
                      className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
                    />
                  ))}
                </div>
                <div className="pl-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        dangerouslySetInnerHTML={{ __html: star }}
                      />
                    ))}
                    <p className="text-gray-600 font-medium ml-2">5.0</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Trusted by{" "}
                    <span className="font-medium text-gray-800">100,000+</span>{" "}
                    users
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image (Right Side) */}
          <div className="flex-1">
            <div className="relative flex justify-end ">
              <img
                alt="AboutImg"
                className="rounded-3xl"
                src="/images/about.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
