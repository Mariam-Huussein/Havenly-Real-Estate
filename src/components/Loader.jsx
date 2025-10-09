import React from "react";
import { ClipLoader } from "react-spinners";


const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-[9999]">
      <ClipLoader loading={loading} size={50} />
    </div>
  );
}

export default Loader;
