const ResetPasswordForm = ({ formData, handleChange, handleSubmit, loading }) => {
  return (
    <>
      {/* OTP */}
      <div className="flex items-center mt-6 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
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

      {/* Password */}
      <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
        <input
          type="password"
          name="password"
          placeholder="New Password"
          className="border-none outline-none ring-0 w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-70"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? "Processing..." : "Reset Password"}
      </button>
    </>
  );
};

export default ResetPasswordForm;
