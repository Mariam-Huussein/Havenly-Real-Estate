import { Box } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const MainImageUploader = ({ inputs, setInputs, editMode = true }) => (
  <Box mb={2}>
    <div className="flex flex-col items-center">
      <div className="border border-gray-300 rounded-md w-60 h-40 flex items-center justify-center relative">
        {inputs.defaultImage ? (
          <>
            <img
              src={
                inputs.defaultImage instanceof Blob
                  ? URL.createObjectURL(inputs.defaultImage)
                  : inputs.defaultImage
              }
              alt="Preview"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => setInputs((p) => ({ ...p, defaultImage: null }))}
              className={`absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center ${
                editMode && "hidden"
              }`}
            >
              <CloseIcon fontSize="small" />
            </button>
          </>
        ) : (
          <label
            htmlFor="defaultImage"
            className="flex flex-col items-center cursor-pointer"
          >
            <input
              accept="image/*"
              type="file"
              id="defaultImage"
              hidden
              disabled={editMode}
              onChange={(e) =>
                setInputs((p) => ({ ...p, defaultImage: e.target.files[0] }))
              }
            />
            <AddPhotoAlternateIcon sx={{ fontSize: 60 }} />
            <span className="text-xs">Upload Main Image</span>
          </label>
        )}
      </div>
      <p className="text-sm font-medium mt-1">Main Property Image</p>
    </div>
  </Box>
);

export default MainImageUploader;
