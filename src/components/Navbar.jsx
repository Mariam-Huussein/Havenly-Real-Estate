import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import DropDownMenuToggle from "./DropDownMenuToggle";
import { useAuth } from "../context/AuthContext";

const Navbar = ({
  active,
  setMenuOpened,
  showSearch,
  setShowSearch,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", title: "HOME" },
    { path: "/listing", title: "LISTING" },
    { path: "/home", title: "ABOUT", targetId: "about" },
  ];

  return (
    <nav
      className={`hidden lg:flex items-center justify-center gap-10 ${
        !active ? "text-white" : "text-gray-800"
      }`}
    >
      {/* Main Links */}
      <ul className="flex items-center gap-8 font-semibold text-sm uppercase tracking-wide">
        {navLinks.map((link) => (
          <li key={link.title}>
            {link.targetId ? (
              <button
                onClick={() => {
                  setMenuOpened(false);
                  if (window.location.pathname !== "/home") {
                    navigate("/home", { state: { scrollTo: link.targetId } });
                  } else {
                    const section = document.getElementById(link.targetId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className={`${
                  window.location.pathname === "/home" &&
                  window.history.state?.usr?.scrollTo === link.targetId
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "hover:text-teal-500 transition-colors"
                }`}
              >
                {link.title}
              </button>
            ) : (
              <NavLink
                to={link.path}
                end
                onClick={() => {
                  setMenuOpened(false);
                  scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={({ isActive }) =>
                  `pb-1 ${
                    isActive
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "hover:text-teal-500 transition-colors"
                  }`
                }
              >
                {link.title}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Right Side: Search + User */}
      <div className="flex items-center gap-6">
        {/* Search Section */}
        <div className="relative flex items-center">
          {/* Search Input */}
          <div
            className={`transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 rounded-full overflow-hidden ${
              showSearch
                ? "w-[260px] opacity-100 px-4 py-2"
                : "w-0 opacity-0 px-2 py-0 pointer-events-none"
            } ${active ? "bg-gray-100" : "bg-white/90"}`}
          >
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full text-sm outline-none bg-transparent pr-8 placeholder:text-gray-500"
            />
          </div>

          {/* Search Icon */}
          <div
            onClick={() => setShowSearch((prev) => !prev)}
            className={`absolute right-0 p-[8px] rounded-full cursor-pointer z-10 transition ${
              active ? "bg-gray-100" : "bg-white/70"
            } hover:bg-gray-200`}
          >
            <SearchIcon
              className={`${active ? "text-gray-700" : "text-gray-800"}`}
            />
          </div>
        </div>

        {/* User Section */}
        <div className="relative flex items-center">
          {user ? (
            <>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner hover:scale-105 transition-transform"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="size-10 object-cover"
                  />
                ) : (
                  <PersonIcon sx={{ fontSize: 36, color: "#555" }} />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-2 top-4">
                  <DropDownMenuToggle />
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate("/auth/sign-in")}
              className="btn-secondary flexCenter gap-x-2 rounded-full px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              Login
              <PersonIcon fontSize="small" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
