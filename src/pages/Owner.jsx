import { Outlet } from "react-router-dom";
import Sidebar from "../components/Agency/Sidebar";

const Owner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#fffbee] to-white">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Owner;
