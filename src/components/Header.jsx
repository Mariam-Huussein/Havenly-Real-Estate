import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "./Navbar";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";
const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const location = useLocation();
  const { navigate } = useAppContext();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const BookingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 36 36"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-Linecap="round"
      stroke-Linejoin="round"
      class="lucide lucide-scroll-text-icon lucide-scroll-text"
    >
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4 12" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1000-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 OV5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </svg>
  );

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true);
      }
      if (window.scrollY > 10 && menuOpened) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <header
        className={`${
          active ? "bg-white py-3 shadow-md" : "py-4"
        } fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
      >
        <div className="max-padd-container">
          {/* Container */}
          <div className="flexBetween">
            {/*Logo*/}
            <div className="flex flex-1">
              <Link
                to={"/"}
                data-discover="true"
                className={`${
                  !active && "invert"
                } h-11 flex items-center gap-2 px-3 py-2 rounded-full uppercase text-sm font-bold `}
              >
                <img alt="" className="h-11" src="/images/logo-light.svg" />
                Havenly
              </Link>
            </div>
            {/*Navbar*/}
            <Navbar
              setMenuOpened={setMenuOpened}
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
                  : "hidden lg:flex gap-x-5 xl:gap-x-4 medium-15 p-1"
              } ${!menuOpened && !active ? "text-white" : ""}`}
            />
            <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
              {/* Buttons Searchbar & Profile */}
              <div className="relative hidden lg:flex items-center">
                {/* Toggle Input */}
                <div
                  className={`${active ? "bg-secondary/10" : "bg-white"} 
                transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 rounded-full overflow-hidden
                ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0 pointer-events-none"
                }
                  `}
                >
                  <input
                    placeholder="Type here..."
                    className="w-full text-sm outline-none pr-10 placeholder:text-gray-400"
                    type="text"
                  />
                </div>
                <div
                  onClick={() => setshowSearch((prev) => !prev)}
                  className={`${
                    active ? "bg-secondary/10" : "bg-primary"
                  } absolute right-0 ring-1 ring-slate-900/10 p-[8px] rounded-full cursor-pointer z-10`}
                >
                  <SearchIcon />
                </div>
              </div>
              {/* Menu Toggle */}
              <div className="lg:hidden block">
                {menuOpened ? (
                  <CloseIcon
                    onClick={toggleMenu}
                    className={`${
                      !active ? "invert" : ""
                    } cursor-pointer text-xl`}
                  />
                ) : (
                  <MenuIcon
                    onClick={toggleMenu}
                    className={`${
                      !active ? "invert" : ""
                    } cursor-pointer text-xl`}
                  />
                )}
              </div>
              {/* User */}
              <div className="group relative">
                <div>
                  {user ? (
                    <UserButton
                    appearance={{}}
                    >
                      <UserButton.MenuItems>
                        <UserButton.Action
                          label="My Bookings"
                          labelIcon={<BookingIcon />}
                          onClick={() => navigate("/my-bookings")}
                        />
                      </UserButton.MenuItems>
                    </UserButton>
                  ) : (
                    <button
                      onClick={openSignIn}
                      className="btn-secondary flexCenter gap-x-2 rounded-full"
                    >
                      Login
                      <PersonIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
