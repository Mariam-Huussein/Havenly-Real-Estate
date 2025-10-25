import toast from "react-hot-toast";
import { getRealEstateByPage } from "../API/realEstateService";

export const fetchFeaturedProperties = async (pageNumber=1 , pagelimit = 9) => {
  try {
    const res = await getRealEstateByPage(pageNumber, pagelimit);
    return res.data;
  } catch (err) {
    console.error("Error fetching featured properties:", err);
    toast.error("Error fetching featured properties:", err);
    throw err;
  }
};
