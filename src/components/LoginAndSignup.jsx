import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  login,
  register,
  forgotPassword,
  resetPassword,
} from "../services/authService";
import {
  handleLogin,
  handleRegister,
  handleForgotPassword,
  handleResetPassword,
} from "../helpers/authHelpers";

const LoginAndSignup = ({ onClose }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    otp: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "login") handleLogin(formData, setLoading, setError, onClose);
    else if (state === "register")
      handleRegister(formData, setLoading, setError, setState);
    else if (state === "forgot")
      otpSent
        ? handleResetPassword(
            formData,
            setLoading,
            setError,
            setOtpSent,
            setState
          )
        : handleForgotPassword(formData, setLoading, setError, setOtpSent);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-[90%] text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <CloseIcon />
        </button>

        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login"
            ? "Login"
            : state === "register"
            ? "Sign up"
            : otpSent
            ? "Reset Password"
            : "Forgot Password"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          {state === "login"
            ? "Please sign in to continue"
            : state === "register"
            ? "Create your new account"
            : otpSent
            ? "Enter OTP and your new password"
            : "Enter your email to receive OTP"}
        </p>

        {state === "register" && (
          <>
            {/* UserName Input */}
            <div className="flex items-center mt-6 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
              <input
                type="text"
                name="userName"
                placeholder="Username"
                className="border-none outline-none ring-0 w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="border-none outline-none ring-0 w-full"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {/* Email Input */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-none outline-none ring-0 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        {state !== "forgot" || otpSent ? (
          <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-none outline-none ring-0 w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        ) : null}

        {/* OTP Input */}
        {otpSent && (
          <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              className="border-none outline-none ring-0 w-full"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        {state === "login" && (
          <div className="mt-4 text-left text-indigo-500">
            <button
              type="button"
              className="text-sm"
              onClick={() => setState("forgot")}
              disabled={loading}
            >
              Forget password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-70"
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : state === "login"
            ? "Login"
            : state === "register"
            ? "Sign up"
            : otpSent
            ? "Reset Password"
            : "Send OTP"}
        </button>

        <p
          onClick={() =>
            setState((prev) =>
              prev === "login"
                ? "register"
                : prev === "register"
                ? "login"
                : "login"
            )
          }
          className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : state === "register"
            ? "Already have an account?"
            : "Back to login"}{" "}
          <span className="text-indigo-500 hover:underline">click here</span>
        </p>
      </form>
    </div>
  );
};

export default LoginAndSignup;
