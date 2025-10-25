import { useEffect } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const isOwner = true;
  const navItems = [
    {
      path: "/owner",
      label: "Dashboard",
      icon: DashboardRoundedIcon,
    },
    {
      path: "/owner/add-property",
      label: "Add Property",
      icon: AddHomeWorkOutlinedIcon,
    },
    {
      path: "/owner/list-property",
      label: "List Property",
      icon: ViewListRoundedIcon,
    },
  ];

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
      console.log("you're Not Owner");
    }
  }, [isOwner]);

  return (
    <>
      {/* Side Nav */}
      <div className="max-md:flexCenter flex flex-col justify-between bg-white sm:m-3 md:min-w-[20%] md:min-h-[97vh] rounded-xl shadow">
        <div className="flex flex-col gap-y-6 max-md:items-center md:flex-col md:pt-5">
          <div className="w-full flex justify-between md:flex-col">
            <div className="flex flex-1 p-3 lg:pl-8">
              <Link
                to="/"
                className="flex items-center gap-2 py-2 rounded-full uppercase text-sm font-bold text-[#333] w-[fit-content]"
              >
                <img
                  alt="Havenly Logo"
                  className="w-16"
                  src="/images/logo-light.svg"
                />
                <span className="h3 capitalize">Havenly</span>
              </Link>
            </div>
            <div className="md:hidden flex items-center gap-3 md:bg-primary rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
              <div className="text-sm font-semibold text-gray-800 capitalize"></div>
            </div>
          </div>
          <div className="flex md:flex-col md:gap-x-5 gap-y-8 md:mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === "/owner"}
                  className={({ isActive }) =>
                    isActive
                      ? "flexStart gap-x-2 p-5 lg:pl-12 bold-13 sm:!text-sm cursor-pointer h-10 bg-secondary/10 max-md:border-b-4 md:border-r-4 border-secondary"
                      : "flexStart gap-x-2 lg:pl-12 p-5 bold-13 sm:!text-sm cursor-pointer h-10 rounded-xl"
                  }
                >
                  <Icon />
                  <div>{item.label}</div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
