import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";
import toast from "react-hot-toast";
import { handleForgotPassword } from "../../helpers/authHelpers";
import Logo from "../logo";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleForgotPassword(email, setLoading, setError, setSuccess);

    if (!error && !loading) {
      toast.success("Reset code sent successfully!");
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-1 mb-6">
            <Logo/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4">
        Forgot Password
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Enter your email to reset password
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full border rounded-xl px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

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

        <button
          type="submit"
          className="w-full btn-dark transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="mt-3 text-center text-sm">
          Remember your password?{" "}
          <Link to="/auth/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
}

export default ForgotPassword;
