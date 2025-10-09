import { useMemo } from "react";

export const useFilteredProperties = (properties = [], selectedTypes = [], selectedPrices = [], sortBy = "All") => {
  const filtered = useMemo(() => {
    if (!properties || properties.length === 0) return [];

    let result = [...properties];

    // type filter (case-insensitive)
    if (selectedTypes.length > 0) {
      result = result.filter((item) =>
        selectedTypes.some((t) => (item.propertyType || "").toString().toLowerCase().trim() === t.toLowerCase().trim())
      );
    }

    // price filter
    if (selectedPrices.length > 0) {
      result = result.filter((item) => {
        const itemPrice = Number(String(item.price).replace(/[^0-9.-]+/g, ""));
        return selectedPrices.some((range) => {
          // range example: "$20000 to 40000"
          const parts = range.replace(/\$/g, "").split(/to/i);
          const min = Number(parts[0].trim());
          const max = Number(parts[1].trim());
          return itemPrice >= min && itemPrice <= max;
        });
      });
    }

    // sort by price
    if (sortBy === "Low to High") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "High to Low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [properties, selectedTypes, selectedPrices, sortBy]);

  return filtered;
};