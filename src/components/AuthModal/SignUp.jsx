import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { handleRegister } from "../../helpers/authHelpers";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ helper to validate phone number
  const isValidPhoneNumber = (phone) => /^\+?\d{10,15}$/.test(phone.trim());

  // ✅ validation before submission
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email.";

    if (!phone) newErrors.phone = "Phone number is required.";
    else if (!isValidPhoneNumber(phone))
      newErrors.phone = "Please enter a valid phone number.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setErrors({});
    setLoading(true);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    // ✅ هنا نستخدم الـ helper اللي عاملينه قبل
    const formData = {
      fullName: name,
      email,
      phoneNumber: phone,
      password,
    };

    try {
      await handleRegister(formData, setLoading, setError, setSuccess);
      setSuccess("Account created successfully!");
      setTimeout(() => navigate("/auth/sign-in"), 1500);
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 shadow-sm text-sm ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 shadow-sm text-sm ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 shadow-sm text-sm ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className={`w-full border rounded-xl px-3 py-2 pr-10 focus:outline-none focus:ring-2 shadow-sm text-sm ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className={`w-full border rounded-xl px-3 py-2 pr-10 focus:outline-none focus:ring-2 shadow-sm text-sm ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Alerts */}
        {error && (
          <div className="p-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="p-2 text-sm text-green-700 bg-green-100 border border-green-400 rounded">
            {success}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full btn-dark transition"
          disabled={loading}
        >
          Create Account
        </button>

        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
        <p className="text-center text-sm text-slate-600 mt-4">
          <Link to="/auth/sign-up-agency" className="text-slate-800 font-medium">
            Register As Agency?{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
