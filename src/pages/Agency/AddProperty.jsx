// import { useEffect, useState } from "react";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   FormControlLabel,
//   Box,
//   Typography,
// } from "@mui/material";
// import toast from "react-hot-toast";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import CloseIcon from "@mui/icons-material/Close";
// import { createRealEstate } from "../../API/realEstateService";
// import { useAuth } from "../../context/AuthContext";

// const AddProperty = () => {
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     city: "",
//     country: "",
//     address: "",
//     area: "",
//     propertyType: "",
//     price: "",
//     bedrooms: "",
//     bathrooms: "",
//     garages: "",
//     amenities: {
//       parking: false,
//       wifi: false,
//       Backyard: false,
//       terrace: false,
//     },
//     images: [],
//   });

//   const amenities = ["parking", "wifi", "Backyard", "terrace"];
//   const { user } = useAuth();
// const [userId, setUserId] = useState("");

// useEffect(() => {
//   if (user?.userId && userId !== user.userId) {
//     setUserId(user.userId);
//   }
// }, [user, userId]);

// console.log(userId)

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAmenitiesChange = (key) => (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       amenities: { ...prev.amenities, [key]: e.target.checked },
//     }));
//   };

//   const handleMainImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setInputs((prev) => ({ ...prev, defaultImage: file }));
//     }
//   };

//   const handleImagesChange = (index) => (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const updated = [...inputs.images];
//       updated[index] = file;
//       setInputs((prev) => ({ ...prev, images: updated }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const selectedAmenities = Object.keys(inputs.amenities).filter(
//         (key) => inputs.amenities[key]
//       );

//       const formData = new FormData();
//       formData.append("OwnerId", userId || "");
//       formData.append("Title", inputs.title);
//       formData.append("Description", inputs.description);
//       formData.append("Address", inputs.address);
//       formData.append("City", inputs.city);
//       formData.append("Country", inputs.country);
//       formData.append("PropertyType", Number(inputs.propertyType));
//       formData.append("Price", parseFloat(inputs.price));
//       formData.append("Rate", 0);
//       formData.append("Area", Number(inputs.area));
//       formData.append("Bedrooms", Number(inputs.bedrooms));
//       formData.append("Bathrooms", Number(inputs.bathrooms));
//       formData.append("Garages", Number(inputs.garages));

//       selectedAmenities.forEach((a) => formData.append("Amenities", a));

//       if (inputs.defaultImage) {
//         formData.append("DefaultImage", inputs.defaultImage);
//       }
//       inputs.images.forEach((img) => {
//         formData.append("Images", img);
//       });

//       const res = await createRealEstate(formData);
//       toast.success("Property added successfully!");
//     } catch (err) {
//       toast.error("Failed to add property");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       mt={1}
//       sx={{
//         p: { xs: 2, md: 4 },
//         bgcolor: "white",
//         boxShadow: 2,
//         borderRadius: 3,
//         height: "97vh",
//         overflowY: "auto",
//         "& .MuiOutlinedInput-root.Mui-focused fieldset": {
//           borderColor: "#fdc700",
//         },
//         "& .MuiInputLabel-root.Mui-focused": {
//           color: "#000000cc",
//         },
//       }}
//       className={"flex justify-center"}
//     >
//       <form onSubmit={handleSubmit}>
//         <Typography
//           variant="h5"
//           fontWeight="bold"
//           mb={2}
//           className="text-center"
//         >
//           Add New Property
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={2}>
//           {/* Property Name */}
//           <Box display="flex" flexDirection="row" gap={2}>
//             <Box
//               display="flex"
//               flexDirection="column"
//               justifyContent={"space-around"}
//             >
//               <div className="flex flex-wrap items-center gap-4 width-[fit-content] height-[100%]">
//                 <div className="mx-2 border border-gray-300 rounded-md height-[100%] w-[-webkit-fill-available] transition-shadow duration-400 hover:shadow-md relative">
//                   {inputs.defaultImage ? (
//                     <div className="relative">
//                       <img
//                         src={URL.createObjectURL(inputs.defaultImage)}
//                         alt="Preview"
//                         className="w-full h-40 object-cover object-center rounded-md"
//                       />
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setInputs((prev) => ({ ...prev, defaultImage: null }))
//                         }
//                         className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-black/80 transition"
//                       >
//                         <CloseIcon />
//                       </button>
//                     </div>
//                   ) : (
//                     <label
//                       htmlFor="defaultImage"
//                       className="flex flex-col p-4 align-middle items-center height-[100%] cursor-pointer"
//                     >
//                       <input
//                         accept="image/*"
//                         type="file"
//                         id="defaultImage"
//                         onChange={handleMainImage}
//                         hidden
//                       />
//                       <AddPhotoAlternateIcon sx={{ fontSize: 80 }} />
//                       <span className="text-xs">Upload Main Image</span>
//                     </label>
//                   )}
//                 </div>
//                 <p className="text-center w-[-webkit-fill-available] font-medium">
//                   Property Main Image
//                 </p>
//               </div>
//             </Box>

//             <Box
//               display="flex"
//               flexDirection="column"
//               width={"-webkit-fill-available"}
//               gap={2}
//             >
//               <TextField
//                 label="Property Name"
//                 name="title"
//                 value={inputs.title}
//                 onChange={handleChange}
//                 fullWidth
//                 size="small"
//               />
//               {/* Property Description */}
//               <TextField
//                 label="Property Description"
//                 name="description"
//                 value={inputs.description}
//                 onChange={handleChange}
//                 fullWidth
//                 multiline
//                 rows={4}
//                 size="small"
//               />
//             </Box>
//           </Box>

//           <Box display="flex" gap={2} flexWrap="wrap">
//             {/* City */}
//             <TextField
//               label="City"
//               name="city"
//               value={inputs.city}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//             />
//             {/* Country */}
//             <TextField
//               label="Country"
//               name="country"
//               value={inputs.country}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//             />
//             {/* Address */}
//             <TextField
//               label="Address"
//               name="address"
//               value={inputs.address}
//               onChange={handleChange}
//               fullWidth
//               size="small"
//             />
//           </Box>

//           <Box display="flex" gap={2} flexWrap="wrap">
//             {/* Property Type */}
//             <FormControl sx={{ minWidth: 200 }} size="small">
//               <InputLabel>Property Type</InputLabel>
//               <Select
//                 value={inputs.propertyType}
//                 onChange={(e) =>
//                   setInputs({ ...inputs, propertyType: e.target.value })
//                 }
//                 label="Property Type"
//               >
//                 <MenuItem value="0">House</MenuItem>
//                 <MenuItem value="1">Apartment</MenuItem>
//                 <MenuItem value="2">Villa</MenuItem>
//                 <MenuItem value="3">Penthouse</MenuItem>
//                 <MenuItem value="4">Townhouse</MenuItem>
//               </Select>
//             </FormControl>
//             {/* Bedrooms */}
//             <TextField
//               label="Bedrooms"
//               name="bedrooms"
//               type="number"
//               value={inputs.bedrooms}
//               onChange={handleChange}
//               size="small"
//             />
//             {/* Bathrooms */}
//             <TextField
//               label="Bathrooms"
//               name="bathrooms"
//               type="number"
//               value={inputs.bathrooms}
//               onChange={handleChange}
//               size="small"
//             />
//             {/* Garages */}
//             <TextField
//               label="Garages"
//               name="garages"
//               type="number"
//               value={inputs.garages}
//               onChange={handleChange}
//               size="small"
//             />
//             {/* Area */}
//             <TextField
//               label="Area (sq ft)"
//               name="area"
//               type="number"
//               value={inputs.area}
//               onChange={handleChange}
//               size="small"
//             />
//           </Box>

//           {/* Price */}
//           <Box display="flex" gap={2} flexWrap="wrap">
//             <TextField
//               label="Price /night"
//               name="price"
//               type="number"
//               value={inputs.price}
//               onChange={handleChange}
//               size="small"
//             />
//           </Box>

//           {/* Amenities */}
//           <Box mt={1}>
//             <Typography variant="subtitle1" fontWeight="bold">
//               Amenities
//             </Typography>
//             <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
//               {amenities.map((amenity) => (
//                 <FormControlLabel
//                   key={amenity}
//                   control={
//                     <Checkbox
//                       checked={inputs.amenities[amenity]}
//                       onChange={handleAmenitiesChange(amenity)}
//                     />
//                   }
//                   label={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
//                 />
//               ))}
//             </Box>
//           </Box>

//           {/* Images */}
//           <Box mt={1}>
//             <p className="text-base font-medium">Property Images</p>
//             <div className="flex flex-wrap items-center gap-4 mt-2">
//               {Array(4)
//                 .fill("")
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="mx-2 border border-gray-300 rounded-md transition-shadow duration-400 hover:shadow-md relative w-40 h-36 flex items-center justify-center"
//                   >
//                     {inputs.images[index] ? (
//                       <div className="relative w-full h-full">
//                         <img
//                           src={URL.createObjectURL(inputs.images[index])}
//                           alt={`Preview ${index}`}
//                           className="w-full h-full object-cover rounded-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const updated = [...inputs.images];
//                             updated[index] = null;
//                             setInputs((prev) => ({ ...prev, images: updated }));
//                           }}
//                           className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-black/80 transition"
//                         >
//                           ✕
//                         </button>
//                       </div>
//                     ) : (
//                       <label
//                         htmlFor={`image${index}`}
//                         className="flex flex-col py-4 px-5 align-middle items-center cursor-pointer"
//                       >
//                         <input
//                           accept="image/*"
//                           type="file"
//                           id={`image${index}`}
//                           hidden
//                           onChange={handleImagesChange(index)}
//                         />
//                         <AddPhotoAlternateIcon sx={{ fontSize: 50 }} />
//                         <span className="text-xs">Upload</span>
//                       </label>
//                     )}
//                   </div>
//                 ))}
//             </div>
//           </Box>

//           {/* Button Submit */}
//           <Box textAlign="center" mt={2} mb={4}>
//             <button
//               disabled={loading}
//               className={`btn-dark ${
//                 loading ? "cursor-progress" : "cursor-pointer"
//               }`}
//             >
//               {loading ? "Adding..." : "Add Property"}
//             </button>
//           </Box>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddProperty;


import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { createRealEstate } from "../../API/realEstateService";
import MainImageUploader from "./../../components/Agency/MainImageUploader";
import PropertyForm from "./../../components/Agency/PropertyForm";
import AmenitiesSection from "./../../components/Agency/AmenitiesSection";
import ImagesUploader from "./../../components/Agency/ImagesUploader";
import toast from "react-hot-toast";

const AddProperty = () => {
  const { user } = useAuth();
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    address: "",
    area: "",
    propertyType: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    amenities: { parking: false, wifi: false, Backyard: false, terrace: false },
    images: [],
    defaultImage: null,
  });

  useEffect(() => {
    if (user?.userId && userId !== user.userId) setUserId(user.userId);
  }, [user, userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const selectedAmenities = Object.keys(inputs.amenities).filter(
        (key) => inputs.amenities[key]
      );

      const formData = new FormData();
      formData.append("OwnerId", userId);
      formData.append("Title", inputs.title);
      formData.append("Description", inputs.description);
      formData.append("Address", inputs.address);
      formData.append("City", inputs.city);
      formData.append("Country", inputs.country);
      formData.append("PropertyType", Number(inputs.propertyType));
      formData.append("Price", parseFloat(inputs.price));
      formData.append("Rate", 0);
      formData.append("Area", Number(inputs.area));
      formData.append("Bedrooms", Number(inputs.bedrooms));
      formData.append("Bathrooms", Number(inputs.bathrooms));
      formData.append("Garages", Number(inputs.garages));
      selectedAmenities.forEach((a) => formData.append("Amenities", a));
      if (inputs.defaultImage) formData.append("DefaultImage", inputs.defaultImage);
      inputs.images.forEach((img) => img && formData.append("Images", img));

      await createRealEstate(formData);

      toast.success("Property added successfully!");

      // 🧹 Reset form
      setInputs({
        title: "",
        description: "",
        city: "",
        country: "",
        address: "",
        area: "",
        propertyType: 0,
        price: "",
        bedrooms: "",
        bathrooms: "",
        garages: "",
        amenities: { parking: false, wifi: false, Backyard: false, terrace: false },
        images: [],
        defaultImage: null,
      });
    } catch (err) {
      console.error("Error adding property:", err);
      toast.error("Failed to add property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      mt={1}
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: "white",
        boxShadow: 2,
        borderRadius: 3,
        height: "97vh",
        overflowY: "auto",
        width: "100%"
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" fontWeight="bold" mb={2} className="text-center">
          Add New Property
        </Typography>

        <MainImageUploader inputs={inputs} setInputs={setInputs} editMode={false} />
        <PropertyForm inputs={inputs} setInputs={setInputs} editMode={false} />
        <AmenitiesSection inputs={inputs} setInputs={setInputs} editMode={false} />
        <ImagesUploader inputs={inputs} setInputs={setInputs} editMode={false} />

        <Box textAlign="center" mt={2} mb={4}>
          <button
            disabled={loading}
            className={`btn-dark ${loading ? "cursor-progress" : "cursor-pointer"}`}
          >
            {loading ? "Adding..." : "Add Property"}
          </button>
        </Box>
      </form>
    </Box>
  );
};

export default AddProperty;
