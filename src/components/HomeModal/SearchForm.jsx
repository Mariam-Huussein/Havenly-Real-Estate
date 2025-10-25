import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { searchRealEstate } from "../../API/realEstateService";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!destination) return;

    navigate(`/listing?destination=${encodeURIComponent(destination)}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 lg:gap-x-8 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative"
      >
        {/* Destination */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <PlaceOutlinedIcon />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            type="text"
          />
        </div>

        {/* Check In */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <CalendarMonthOutlinedIcon />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            type="date"
          />
        </div>

        {/* Check Out */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <CalendarMonthOutlinedIcon />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            type="date"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <PersonIcon />
            <label htmlFor="guests">Guests</label>
          </div>
          <input
            min="1"
            max="4"
            id="guests"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="0"
            type="number"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-6 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
        >
          <SearchIcon />
          <span>Search</span>
        </button>
      </form>

      {/* {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Results:</h3>
          <ul className="space-y-2">
            {results.map((item) => (
              <li key={item.id} className="border p-2 rounded">
                {item.title} - {item.location}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </>
  );
}

export default SearchForm;
