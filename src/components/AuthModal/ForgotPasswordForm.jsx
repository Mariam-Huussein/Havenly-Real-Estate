const ForgotPasswordForm = ({ formData, handleChange, handleSubmit, loading }) => {
  return (
    <>
      <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-none outline-none ring-0 w-full"
          value={formData.email}
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
        {loading ? "Processing..." : "Send OTP"}
      </button>
    </>
  );
};

export default ForgotPasswordForm;
