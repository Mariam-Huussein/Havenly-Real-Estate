import {useState} from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
const Footer = () => {
  const [emailInputValue, setEmailInputValue] = useState("")
  return (
    <>
      <footer className="pt-16 xl:pt-20 w-full text-gray-500 bg-[#fffbee]">
        <div className="max-padd-container">
          <div className="flex flex-wrap justify-between gap-12 md:gap-6">
            <div className="max-w-80">
              <div className="flex mb-4">
              <Link to="/" data-discover="true" className="flex items-center gap-2 px-3 py-2 rounded-full uppercase text-sm font-bold text-[#333]">
                <img
                  alt=""
                  className=" h-11"
                  src="/images/logo-light.svg"
                />
                Havenly
              </Link>
              </div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
              <div className="flex items-center gap-3 mt-4">
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
                <LinkedInIcon/>
              </div>
            </div>
            <div>
              <h4 className="h4 text-black/80">COMPANY</h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="h4 text-black/80">SUPPORT</h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Safety Information</a>
                </li>
                <li>
                  <a href="#">Cancellation Options</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="max-w-80">
              <h4 className="h4 text-black/80">STAY UPDATED</h4>
              <p className="mt-3 text-sm">
                Subscribe to our newsletter for inspiration and special offers.
              </p>
              <div className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full mt-6">
                <input
                  placeholder="Enter your email.."
                  className="w-full h-full outline-none text-sm text-gray-500"
                  type="text"
                />
                <button
                  type="submit"
                  className="btn-dark font-medium !px-3.5 py-2 mr-0.5 "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 mt-8">
            <a href="#"> 2025 Nestorria. All rights reserved.</a>
            <ul className="flex items-center gap-4">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
