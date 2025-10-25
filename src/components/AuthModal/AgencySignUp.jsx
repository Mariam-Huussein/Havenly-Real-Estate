import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { handleAgencyRegister } from "../../helpers/authHelpers";

function AgencySignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    agencyName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.agencyName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    console.log("📦 Sending Agency Register Data:", formData);

    const result = await handleAgencyRegister(formData, setLoading, setError);

    if (result.succeeded) {
      toast.success(result.message);
      navigate("/auth/sign-in");
    } else {
      toast.error(result.message || "Registration failed");
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Register as Agency
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Agency Name
          </label>
          <input
            type="text"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm my-2 text-center">{error}</p>
        )}
        <button
          type="submit"
          className="w-full btn-dark transition"
          disabled={loading}
        >
          Register
        </button>
      </form>

      <p className="text-center text-sm text-slate-600 mt-4">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-slate-800 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}

export default AgencySignUp;
