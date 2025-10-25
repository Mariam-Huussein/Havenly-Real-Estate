import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, menuOpened]);

  return (
    <header
      className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-300 ${
        active ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "py-4"
      }`}
    >
      <div className="max-padd-container">
        <div className="flexBetween items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 text-lg font-bold uppercase tracking-wide ${
              !active ? "text-white" : "text-gray-800"
            }`}
          >
            <img
              src="/images/logo-light.svg"
              alt="logo"
              className={`${!active && "invert"} h-10`}
            />
            Havenly
          </Link>

          {/* Desktop Navbar */}
          <Navbar
            active={active}
            setMenuOpened={setMenuOpened}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          {/* Mobile menu icon + dropdown handled inside MenuToggle */}
          <MenuToggle
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            active={active}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
