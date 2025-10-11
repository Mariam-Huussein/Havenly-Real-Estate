import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetPasswordForm from "./ResetPasswordForm";

const AuthModal = ({ onClose }) => {
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
      <div className="sm:w-[350px] w-[90%] bg-white rounded-2xl shadow-xl border border-gray-200 relative p-8 text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <CloseIcon />
        </button>

        <h1 className="text-gray-900 text-3xl font-medium">
          {state === "login"
            ? "Login"
            : state === "register"
            ? "Sign up"
            : otpSent
            ? "Reset Password"
            : "Forgot Password"}
        </h1>

        <p className="text-gray-500 text-sm mt-2 mb-4">
          {state === "login"
            ? "Please sign in to continue"
            : state === "register"
            ? "Create your new account"
            : otpSent
            ? "Enter OTP and your new password"
            : "Enter your email to receive OTP"}
        </p>

        {/* Dynamic Form Rendering */}
        {state === "login" && (
          <LoginForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            setState={setState}
          />
        )}

        {state === "register" && (
          <RegisterForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            setState={setState}
          />
        )}

        {state === "forgot" && !otpSent && (
          <ForgotPasswordForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            setState={setState}
          />
        )}

        {state === "forgot" && otpSent && (
          <ResetPasswordForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            setState={setState}
          />
        )}

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

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
      </div>
    </div>
  );
};

export default AuthModal;
