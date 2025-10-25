import { Link } from "react-router-dom";

const UnauthorizedNotFound = ({Title , SupTitle, Message}) => {
  return (
    <div className="flex flex-col items-center justify-center text-sm min-h-[80vh] h-[400px]">
      <p className="font-medium text-lg text-secondary">{Title}</p>
      <h2 className="md:text-6xl text-4xl font-semibold text-gray-800">
        {SupTitle}
      </h2>
      <p className="text-base mt-4 text-gray-500">
        {Message}
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Link
          to={"/"}
          className="btn-outline px-7 py-2.5 text-slate-950 rounded active:scale-95 transition-all"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedNotFound;
