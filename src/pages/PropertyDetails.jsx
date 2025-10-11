import React, { useEffect, useState } from "react";
import { usePropertyContext } from "../context/PropertyContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../components/PropertyImages";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const PropertyDetails = () => {
  const { properties } = usePropertyContext();
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const property = properties.find((property) => property.id === id);
    property && setProperty(property);
  }, [properties]);

  return (
    property && (
      <section className="bg-gradient-to-r from-[#fffbee] to-white py-28">
        <div className="max-padd-container">
          <div className="flex max-sm:gap-1 max-md:gap-3 gap-5 h-[400px] w-full">
            {/* Images */}
            <PropertyImages property={property} />
          </div>
          <div className="flex flex-col xl:flex-row gap-8 mt-6">
            <div className="p-4 flex-2 rounded-xl border border-slate-900/10">
              {/* Details Of Property */}
              <div className="flex items-center flex-wrap md:flex-row md:justify-between justify-center flex-col gap-2 text-secondary relative top-1.5">
                <p className="flexStart gap-x-2">
                  <PlaceOutlinedIcon />
                  <span>{property.address}</span>
                </p>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    value={property.rate || "5.0"}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
              <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">${property.price}/night</div>
              </div>
              <div className="flex justify-between items-start my-1">
                <h4 className="h4 text-secondary">{property.propertyType}</h4>
              </div>
              <div className="flex gap-x-4 mt-3">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <BedIcon />
                  {property.facilities.bedrooms}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <BathtubIcon />
                  {property.facilities.bathrooms}{" "}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <DirectionsCarIcon />
                  {property.facilities.garages}{" "}
                </p>
                <p className="flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500]">
                  <StraightenIcon />
                  {property.area}
                </p>
              </div>
              <div className="mt-6">
                <h4 className="h4 mt-4 mb-1">Property Details</h4>
                <p className="mb-4">{property.description}</p>
              </div>
              <h4 className="h4 mt-6 mb-2">Amenities</h4>
              <div className="flex gap-3">
                {property.amenities &&
                  property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="p-3 py-1 rounded-lg bg-secondary/10 ring-1 ring-slate-900/10 text-sm"
                    >
                      {amenity}
                    </div>
                  ))}
              </div>

              {/* Check Form */}
              <form className="text-gray-500 bg-secondary/10 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative mt-10">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <CalendarMonthOutlinedIcon />
                    <label htmlFor="checkInDate">Check in</label>
                  </div>
                  <input
                    min="2025-10-09"
                    id="checkInDate"
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    type="date"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <CalendarMonthOutlinedIcon />
                    <label htmlFor="checkOutDate">Check out</label>
                  </div>
                  <input
                    id="checkOutDate"
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    type="date"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <PersonIcon />
                    <label htmlFor="guests">Guests</label>
                  </div>
                  <input
                    min="1"
                    max="4"
                    id="guests"
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    placeholder="1"
                    type="number"
                  />
                </div>
                <button className="flexCenter gap-1 rounded-md btn-dark min-w-44">
                  <SearchIcon />
                  <span>Check Dates</span>
                </button>
              </form>
            </div>
            {/* Agency Info */}
            <div className="flex-2 w-full max-w-sm">
              <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white/80 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-slate-800 mb-6">
                  Agency Contact
                </h4>

                {/* Agency header */}
                <div className="flex items-center gap-3 mb-6">
                  {property.agency?.img ? (
                    <img
                      src={property.agency.img}
                      alt={property.agency.name || "Agency"}
                      className="h-12 w-12 rounded-full object-cover border border-slate-300"
                    />
                  ) : (
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 border border-yellow-200">
                      <PersonIcon className="text-yellow-600" />
                    </div>
                  )}

                  <div>
                    <h5 className="text-lg font-medium text-slate-700">
                      {property.agency?.name || "Unknown"}
                    </h5>
                    <p className="text-sm text-slate-500">{property.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-50 transition-colors">
                  <LocalPhoneIcon className="text-yellow-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">Phone</span>
                    <a
                      href={`tel:${property.agency?.phone}`}
                      className="text-slate-700 hover:text-gray-950 font-medium"
                    >
                      {property.agency?.phone || "Unknown"}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-50 transition-colors mt-2">
                  <EmailIcon className="text-yellow-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">E-mail</span>
                    <a
                      href={`mailto:${property.agency?.email}`}
                      className="text-slate-700  hover:text-gray-950 font-medium"
                    >
                      {property.agency?.email || "Unknown"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default PropertyDetails;
