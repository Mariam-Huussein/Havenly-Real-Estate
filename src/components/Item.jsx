import { Link } from "react-router-dom";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StraightenIcon from "@mui/icons-material/Straighten";

const Item = ({ property }) => {
  return (
    <>
      <Link
        to={"/listing/" + property.id}
        className="block rounded-lg bg-white ring-1 ring-slate-900/5 cursor-pointer"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={property.defaultImage}
            alt={property.title}
            className="h-[13rem] w-full aspect-square object-cover rounded-t-xl"
          />
        </div>
        <div className="p-3">
          <div className="flexBetween">
            <h5 className="bold-16 my-1">{property.propertyType}</h5>
            <div className="bold-15 text-secondary">
              {property.price} <span className="text-xs">/night</span>
            </div>
          </div>
          <h4 className="h4 line-clamp-1">{property.title}</h4>
          <div className="flex gap-x-2 py-2">
            <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <BedIcon />
              {property.facilities.bedrooms}
            </p>
            <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <BathtubIcon />
              {property.facilities.bathrooms}
            </p>
            <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <DirectionsCarIcon />
              {property.facilities.garages}
            </p>
            <p className="flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500]">
              <StraightenIcon />
              {property.area}
            </p>
          </div>
          <p className="pt-2 mb-4 line-clamp-2">{property.description}</p>
        </div>
      </Link>
    </>
  );
};

export default Item;
