import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-16 lg:pt-20 w-full text-gray-500 bg-[#fffbee]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
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
            <p className="mt-2 ps-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <a href="about">About us</a>
                </li>
                <li>
                  <Link to={"/contact"}>Contact us</Link>
                </li>
                <li>
                  <Link to={"/listing"}>Listing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+1-212-456-7890</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2024 © <Link to={"/"}>Havenly</Link>. All
          Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
