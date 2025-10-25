import axiosClient from "./axiosClient";

// 🏠 Get All Real Estates
export const getAllRealEstates = async () => {
  const res = await axiosClient.get("/RealEstate/GetAll");
  return res.data;
};

// 🏠 Get All Real Estates for A Spacific Agency
export const getAllAgencyRealEstate = async (id) => {
  const res = await axiosClient.get("/RealEstate/GetAllAgencyRealEstate", {
    params: { Id: id },
  });
  return res.data;
};

// 📄 Get Real Estate by Id
export const getRealEstateById = async (id) => {
  const res = await axiosClient.get("/RealEstate/GetById", {
    params: { Id: id },
  });
  return res.data;
};

// 🔍 Search Real Estate by destination
export const searchRealEstate = async (destination) => {
  const res = await axiosClient.get("/RealEstate/Search", {
    params: { destination },
  });
  return res.data;
};

// 🧾 Paginated Results
export const getRealEstateByPage = async (pageNumber, pageSize) => {
  const res = await axiosClient.get("/RealEstate/GetAllByPages", {
    params: { pageNumber, pageSize },
  });
  return res.data;
};

// ➕ Create Real Estate (multipart/form-data)
export const createRealEstate = async (formData) => {
  const res = await axiosClient.post("/RealEstate/Create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// ✏️ Update Real Estate (application/json)
export const updateRealEstate = async (data) => {
  const res = await axiosClient.put("/RealEstate/Update", data);
  return res.data;
};

// ❌ Delete Real Estate
export const deleteRealEstate = async (id) => {
  const res = await axiosClient.delete(`/RealEstate/delete/${id}`);
  return res.data;
};
