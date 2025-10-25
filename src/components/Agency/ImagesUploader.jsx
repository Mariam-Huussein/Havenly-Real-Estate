import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const ImagesUploader = ({ inputs, setInputs , editMode=false }) => {
  const handleImagesChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...inputs.images];
      updated[index] = file;
      setInputs((prev) => ({ ...prev, images: updated }));
    }
  };

  return (
    <div className="mt-3">
      <p className="font-medium mb-2">Property Images</p>
      <div className="flex flex-wrap gap-4">
        {Array(4)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="border rounded-md w-40 h-36 flex items-center justify-center relative"
            >
              {inputs.images[i] ? (
                <div className="relative w-full h-full">
                  <img
                    src={
                      inputs.images[i] instanceof Blob
                        ? URL.createObjectURL(inputs.images[i])
                        : inputs.images[i]
                    }
                    alt={`Preview ${i}`}
                    className="w-full h-full object-cover rounded-md"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...inputs.images];
                      updated[i] = null;
                      setInputs((prev) => ({ ...prev, images: updated }));
                    }}
                    className={`absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center ${editMode && " opacity-0 hidden"}`}
                  >
                                  <CloseIcon fontSize="small" />

                  </button>
                </div>
              ) : (
                <label
                  htmlFor={`image${i}`}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <input
                    accept="image/*"
                    type="file"
                    id={`image${i}`}
                    hidden
                    disabled={editMode}
                    onChange={handleImagesChange(i)}
                  />
                  <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
                  <span className="text-xs">Upload</span>
                </label>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagesUploader;
