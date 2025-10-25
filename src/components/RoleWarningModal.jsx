import DoDisturbAltRoundedIcon from "@mui/icons-material/DoDisturbAltRounded";

const RoleWarningModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[420px] w-[340px] border border-gray-200 animate-fade-in">
        <div className="flex items-center justify-center p-4 bg-[#fef08a] rounded-full">
          <DoDisturbAltRoundedIcon sx={{color:"#ca8a04"}}/>
        </div>
        <h2 className="text-gray-900 font-semibold mt-4 text-xl">
          Access Denied
        </h2>
        <p className="text-sm text-gray-600 mt-2 text-center">{message}</p>

        <div className="flex items-center justify-center gap-4 mt-5 w-full">
          <button
            type="button"
            onClick={onClose}
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleWarningModal;
