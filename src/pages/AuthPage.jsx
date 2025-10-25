import { useParams, Navigate } from "react-router-dom";
import SignIn from "../components/AuthModal/SignIn";
import SignUp from "../components/AuthModal/SignUp";
import ForgotPassword from "../components/AuthModal/ForgotPassword";
import AgencySignUp from "../components/AuthModal/AgencySignUp";

function AuthPage() {
  const { type } = useParams();

  const validTypes = [
    "sign-in",
    "sign-up",
    "sign-up-agency",
    "forgot-password",
  ];

  if (!validTypes.includes(type))
    return <Navigate to="/auth/sign-in" replace />;

  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row bg-[#efefef]">
      {/* Left side - Image / Brand */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#df9429] text-white p-10 rounded-r-3xl">
        <div className="max-w-lg text-center space-y-6">
          <img src="./../images/auth-page-image.png"/>
          <h2 className="text-3xl font-extrabold">Welcome to Havenly Real Estate</h2>
          <p className="text-[#f4f8fb]">
            Sign in or create your account to manage properties, view listings, and more.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        {type === "sign-in" && <SignIn />}
        {type === "sign-up" && <SignUp />}
        {type === "sign-up-agency" && <AgencySignUp />}
        {type === "forgot-password" && <ForgotPassword />}
      </div>
    </div>
  );
}

export default AuthPage;
