import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = ({ handleSubmit, loading, setState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkValidation = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={checkValidation}>
      {/* Email */}
      <div className="mt-6">
        <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <input
            type="email"
            placeholder="Email"
            className="border-none outline-none ring-0 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs text-left mt-1 pl-3">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mt-4">
        <div className="relative flex items-center bg-white border border-gray-300/80 h-12 rounded-full pl-6 pr-4 gap-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-none outline-none ring-0 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-500"
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs text-left mt-1 pl-3">
            {errors.password}
          </p>
        )}
      </div>

      {/* Forget Password */}
      <div className="mt-4 text-left">
        <button
          type="button"
          className="text-sm text-indigo-500 hover:underline"
          onClick={() => setState("forgot")}
          disabled={loading}
        >
          Forgot password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-70"
        disabled={loading}
      >
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
