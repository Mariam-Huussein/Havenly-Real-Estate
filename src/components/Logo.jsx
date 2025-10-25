import { Link } from "react-router-dom";

const Logo = ({invert=false , imgSize = "h-11" , textSize = "h-11"}) => {
  return (
    <>
      {/*Logo*/}
      <div className="flex">
        <Link
          to={"/"}
          className={`${
            invert && "invert"
          } ${textSize} flex items-center gap-2 px-3 py-2 rounded-full uppercase text-sm font-bold `}
        >
          <img alt="Havenly Logo" className={imgSize} src="/images/logo-light.svg" />
          Havenly
        </Link>
      </div>
    </>
  );
};

export default Logo;
