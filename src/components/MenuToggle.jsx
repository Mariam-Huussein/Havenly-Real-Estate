// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const MenuToggle = ({ menuOpened, active, toggleMenu }) => {
//   return (
//     <div className="lg:hidden block">
//       {menuOpened ? (
//         <CloseIcon
//           onClick={toggleMenu}
//           className={`${
//             !active ? "text-white" : "text-gray-700"
//           } cursor-pointer text-2xl`}
//         />
//       ) : (
//         <MenuIcon
//           onClick={toggleMenu}
//           className={`${
//             !active ? "text-white" : "text-gray-700"
//           } cursor-pointer text-2xl`}
//         />
//       )}
//     </div>
//   );
// };

// export default MenuToggle;

import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "./../context/AuthContext";

const MenuToggle = ({
  menuOpened,
  toggleMenu,
  active,
  showSearch,
  setShowSearch,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // if clicked outside, close
        if (menuOpened) toggleMenu();
      }
    };
    if (menuOpened) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpened, toggleMenu]);

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/about", title: "About" },
  ];

  return (
    <div className="lg:hidden relative" ref={containerRef}>
      <button
        onClick={toggleMenu}
        aria-expanded={menuOpened}
        className={`p-2 rounded-md transition ${
          active ? "bg-white/80 text-gray-800" : "bg-white/60 text-white"
        }`}
      >
        {menuOpened ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Dropdown anchored to the button — appears under the button */}
      {menuOpened && (
        <div
          className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 z-50"
          role="menu"
        >
          <div className="px-4 py-3">
            {/* optional search inside dropdown */}
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full rounded-full border border-gray-200 px-3 py-2 text-sm outline-none"
              />
              <div className="absolute right-2 top-2 text-gray-500">
                <SearchIcon fontSize="small" />
              </div>
            </div>

            {/* nav links */}
            <ul className="flex flex-col gap-2 mb-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <NavLink
                    to={link.path}
                    onClick={() => {
                      toggleMenu();
                      scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="block px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 pt-3">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      toggleMenu();
                      navigate("/profile");
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2"
                  >
                    <PersonIcon fontSize="small" />
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      toggleMenu();
                      navigate("/my-bookings");
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2"
                  >
                    Bookings
                  </button>
                  <button
                    onClick={() => {
                      // call logout here if you have it
                      // logout();
                      toggleMenu();
                      navigate("/");
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    toggleMenu();
                    navigate("/auth/sign-in");
                  }}
                  className="w-full text-left px-3 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 flex items-center justify-center gap-2"
                >
                  <PersonIcon fontSize="small" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
