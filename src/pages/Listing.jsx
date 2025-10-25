import { useEffect, useState } from "react";
import Item from "./../components/Item";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFilteredProperties } from "../hooks/useFilteredProperties";
import Pagination from "@mui/material/Pagination";
import { fetchFeaturedProperties } from "../helpers/propertiesHelper";
import toast from "react-hot-toast";
import { searchRealEstate } from "../API/realEstateService";

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(9);

  const queryParams = new URLSearchParams(location.search);
  const destination = queryParams.get("destination");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        if (destination) {
          console.log(destination)
          const data = await searchRealEstate(destination);
          console.log(data)
          setProperties(data.data);
        } else {
          const res = await fetchFeaturedProperties(1, 9);
          setProperties(res.data);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
        toast.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [destination]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchFeaturedProperties(pageNumber,pageLimit);
  //       setProperties(data.data);
  //       setTotalRecords(data.totalRecords);
  //     } catch (err) {
  //       console.error("Error fetching properties:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);
  const sortOptions = ["All", "Relevant", "Low to High", "High to Low"];

  const propertyTypes = [
    "House",
    "Apartment",
    "Villa",
    "Penthouse",
    "Townhouse",
    "Commercial",
    "Land Plot",
  ];

  const priceRange = [
    "$0 to 10000",
    "$10000 to 20000",
    "$20000 to 40000",
    "$40000 to 80000",
  ];

  // states
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const itemsPerPage = 9;

  const filteredProperties = useFilteredProperties(
    properties || [],
    selectedTypes,
    selectedPrices,
    sortBy
  );

  useEffect(() => {
    if (properties === undefined || properties === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [properties]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTypes, selectedPrices, sortBy, properties]);

  // pagination calculations
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProperties.length / itemsPerPage)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // handlers
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((p) => p !== type) : [...prev, type]
    );
  };

  const handlePriceChange = (price) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
      <div className="max-padd-container flex flex-col sm:flex-row gap-8 mb-16">
        {/* Filters (Left Side) */}
        <div className="bg-secondary/10 ring-1 ring-slate-900/5 p-4 sm:min-w-60 sm:h-[600px] rounded-xl flex flex-col">
          {/* Sort Options */}
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              "& .MuiInputLabel-root": { color: "#6B7280" },
              "& .Mui-focused": { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(15, 23, 42, 0.1)" },
                "&:hover fieldset": { borderColor: "#FACC15" },
                "&.Mui-focused fieldset": { borderColor: "#FACC15" },
              },
            }}
            size="small"
          >
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              label="Sort By"
              onChange={handleSortChange}
            >
              {sortOptions.map((sort, index) => (
                <MenuItem value={sort} key={index}>
                  {sort}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Property Type */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4 font-semibold text-gray-800">
              Property Type
            </h5>
            {propertyTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 medium-14 text-gray-500 cursor-pointer hover:text-gray-800"
              >
                <Checkbox
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  sx={{
                    color: "#D1D5DB",
                    "&.Mui-checked": { color: "#FACC15" },
                  }}
                  style={{ padding: 0 }}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4 font-semibold text-gray-800">Price Range</h5>
            {priceRange.map((price) => (
              <label
                key={price}
                className="flex gap-1 items-center medium-14 text-gray-500 cursor-pointer"
              >
                <Checkbox
                  checked={selectedPrices.includes(price)}
                  onChange={() => handlePriceChange(price)}
                  sx={{
                    color: "#D1D5DB",
                    "&.Mui-checked": { color: "#FACC15" },
                  }}
                  style={{ padding: 0 }}
                />
                {price}
              </label>
            ))}
          </div>
        </div>

        {/* List Of Properties (Right Side) */}
        <div className="min-h-[97vh] overflow-y-scroll rounded-xl">
          {/* List Of Properties (Right Side) */}
          <div className="min-h-[97vh] overflow-y-scroll rounded-xl p-4">
            {loading ? (
              // Skeleton placeholders
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {Array(9)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse bg-gray-100 rounded-2xl p-4 space-y-4 shadow-sm"
                    >
                      <div className="h-48 bg-gray-300 rounded-xl"></div>
                      <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                  ))}
              </div>
            ) : currentItems.length > 0 ? (
              <>
                {/* Real property cards */}
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                  {currentItems.map((property) => (
                    <Item property={property} key={property.id} />
                  ))}
                </div>

                {/* Pagination (hide if only 1 page) */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                      variant="outlined"
                      color="secondary"
                    />
                  </div>
                )}
              </>
            ) : (
              // Empty state
              <div className="text-center text-gray-500 mt-20 text-lg">
                No Property Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
