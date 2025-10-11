// import { useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const RegisterForm = ({ formData, handleChange, handleSubmit, loading }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [errors, setErrors] = useState({});

//   const isValidPhoneNumber = (phone) => {
//     const cleaned = phone.replace(/\s+/g, "");
//     const phoneRegex = /^\+\d{10,15}$/;
//     return phoneRegex.test(cleaned);
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!username.trim()) newErrors.username = "Please Enter An Username";
//     if (!email) newErrors.email = "Email";
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

//     if (!phone) newErrors.phone = "Phone number";
//     else if (!isValidPhoneNumber(phone))
//       newErrors.phone = "Invalid phone number format (must start with +)";

//     if (!password) newErrors.password = "Password";
//     else if (password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";

//     if (!confirmPassword)
//       newErrors.confirmPassword = "Please confirm your password";
//     else if (password !== confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const checkValidation = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       handleSubmit({ username, email, phone, password });
//     }
//   };

//   return (
//     <form onSubmit={checkValidation}>
//       {/* Username */}
//       <div className="mt-6">
//         <div className="flex items-center mt-6 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
//           <input
//             type="text"
//             name="userName"
//             placeholder="text-sm Username"
//             className={`text-sm border-none outline-none ring-0 w-full${ errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500" }`}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//                   {errors.username && (
//             <p className="mt-1 text-xs text-red-600">{errors.name}</p>
//           )}
//       </div>

//       {/* Phone */}
//       <div className="mt-6">
//         <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="text-sm Phone number (+20...)"
//             className="text-sm border-none outline-none ring-0 w-full"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))}
//           />
//         </div>
//       </div>

//       {/* Email */}
//       <div className="mt-6">
//         <div className="flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
//           <input
//             type="email"
//             name="email"
//             placeholder="text-sm Email"
//             className="text-sm border-none outline-none ring-0 w-full"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Password */}
//       <div className="mt-6">
//         <div className="relative flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 pr-4 gap-2">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="text-sm Password"
//             className="text-sm border-none outline-none ring-0 w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword((prev) => !prev)}
//             className="text-gray-500"
//           >
//             {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//           </button>
//         </div>
//       </div>

//       {/* Confirm Password */}
//       <div className="mt-6">
//         <div className="relative flex items-center mt-4 bg-white border border-gray-300/80 h-12 rounded-full pl-6 pr-4 gap-2">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="text-sm Confirm Password"
//             className="text-sm border-none outline-none ring-0 w-full"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword((prev) => !prev)}
//             className="text-gray-500"
//           >
//             {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//           </button>
//         </div>
//       </div>

//       {/* Errors */}
//       {/* <div className="mt-2 text-sm text-red-500">
//         {Object.values(errors).map((err, idx) => (
//           <p key={idx}>{err}</p>
//         ))}
//       </div> */}

//       {/* Submit */}
//       <button
//         type="submit"
//         className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-70"
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Sign up"}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;

import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = ({ handleSubmit, loading }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const isValidPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\s+/g, ""); // يشيل المسافات
    const phoneRegex = /^\+\d{10,15}$/;
    return phoneRegex.test(cleaned);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!isValidPhoneNumber(phone))
      newErrors.phone = "Invalid format — must start with country code (e.g. +20...)";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkValidation = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit({ username, email, phone, password });
    }
  };

  return (
    <form onSubmit={checkValidation}>
      {/* Username */}
      <div className="mt-6">
        <div className="flex items-center bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <input
            type="text"
            placeholder="Username"
            className="text-sm border-none outline-none ring-0 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-xs text-left mt-1 pl-3">
            {errors.username}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="mt-4">
        <div className="flex items-center bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <input
            type="tel"
            placeholder="Phone number"
            className="text-sm border-none outline-none ring-0 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs text-left mt-1 pl-3">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mt-4">
        <div className="flex items-center bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <input
            type="email"
            placeholder="Email"
            className="text-sm border-none outline-none ring-0 w-full"
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
            className="text-sm border-none outline-none ring-0 w-full"
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

      {/* Confirm Password */}
      <div className="mt-4">
        <div className="relative flex items-center bg-white border border-gray-300/80 h-12 rounded-full pl-6 pr-4 gap-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="text-sm border-none outline-none ring-0 w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="text-gray-500"
          >
            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs text-left mt-1 pl-3">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-70"
        disabled={loading}
      >
        {loading ? "Processing..." : "Sign up"}
      </button>
    </form>
  );
};

export default RegisterForm;
