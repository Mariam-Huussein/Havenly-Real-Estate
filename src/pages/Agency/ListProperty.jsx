import { useEffect, useState } from "react";
import {
  deleteRealEstate,
  getAllAgencyRealEstate,
  getRealEstateById,
  updateRealEstate,
} from "../../API/realEstateService";
import ListTable from "../../components/Agency/ListTable";
import ListCard from "../../components/Agency/ListCard";
import MainImageUploader from "../../components/Agency/MainImageUploader";
import PropertyForm from "../../components/Agency/PropertyForm";
import ImagesUploader from "../../components/Agency/ImagesUploader";
import AmenitiesSection from "../../components/Agency/AmenitiesSection";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import toast from "react-hot-toast";

const ListProperty = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [properties, setProperties] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultProperty = {
    id: 0,
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
    price: 0,
    rate: 0,
    propertyType: 0,
    numberOfBeds: 0,
    numberOfBathrooms: 0,
    numberOfParking: 0,
    area: 0,
    defaultImage: "",
    images: [],
    amenities: {},
  };
  const [selectedProperty, setSelectedProperty] = useState(defaultProperty);

  // 🟢 Fetch all properties for current owner
  useEffect(() => {
    const fetchAgencyProperties = async () => {
      try {
        setLoading(true);
        const res = await getAllAgencyRealEstate(userId);
        const data = res.data || [];
        setProperties(data);
      } catch (err) {
        console.error("Error fetching agency properties:", err);
        toast.error("Failed to load agency properties");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchAgencyProperties();
    }
  }, [userId]);

  // 🟡 When clicking property name → open modal with full data
  const propertyTypeMap = {
    House: 0,
    Apartment: 1,
    Villa: 2,
    Penthouse: 3,
    Townhouse: 4,
  };

  const handleEdit = async (property) => {
    try {
      setLoading(true);
      const res = await getRealEstateById(property.id);
      const data = res?.data;

      setSelectedProperty({
        ...defaultProperty,
        ...data,
        propertyType: propertyTypeMap[data.propertyType] ?? 0,
        defaultImage: data.defaultImage || "",
        images: data.images?.length ? data.images : [],
        amenities:
          data.amenities?.reduce((acc, a) => ({ ...acc, [a]: true }), {}) || {},
      });

      setOpen(true);
    } catch (err) {
      toast.error("Failed to load property details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (propertyId) => {
    try {
      setLoading(true);
      const res = await deleteRealEstate(propertyId);
      const data = res?.data;

      toast.success("You Deleted Property Successfuly!");
      fetchAgencyProperties();
    } catch (err) {
      toast.error("Failed to load property details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🟣 Save changes
  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        id: selectedProperty.id,
        title: selectedProperty.title,
        description: selectedProperty.description,
        address: selectedProperty.address,
        city: selectedProperty.city,
        country: selectedProperty.country,
        price: Number(selectedProperty.price),
        rate: selectedProperty.rate,
        propertyType: Number(selectedProperty.propertyType),
        area: Number(selectedProperty.area),
        defaultImage: selectedProperty.defaultImage,
        images: selectedProperty.images.filter(Boolean),
        amenities: Object.keys(selectedProperty.amenities || {}).filter(
          (key) => selectedProperty.amenities[key]
        ),
        numberOfBeds:
          selectedProperty.numberOfBeds ??
          selectedProperty.facilities?.bedrooms ??
          0,
        numberOfBathrooms:
          selectedProperty.numberOfBathrooms ??
          selectedProperty.facilities?.bathrooms ??
          0,
        numberOfParking:
          selectedProperty.numberOfParking ??
          selectedProperty.facilities?.garages ??
          0,
      };

      console.log(payload);
      const res = await updateRealEstate(payload);
      toast.success("Property updated successfully!");

      // تحديث الليست في الصفحة بعد الحفظ
      setProperties((prev) =>
        prev.map((p) => (p.id === payload.id ? { ...p, ...payload } : p))
      );

      setOpen(false);
    } catch (err) {
      toast.error("Failed to update property");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl">
        <ListTable
          properties={properties}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <ListCard
          properties={properties}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>

      {/* 🟢 Popup Edit Form */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        disableEnforceFocus
      >
        <DialogTitle>Edit Property</DialogTitle>
        <DialogContent>
          {selectedProperty ? (
            <>
              <MainImageUploader
                inputs={selectedProperty}
                setInputs={setSelectedProperty}
                editMode={true}
              />
              <PropertyForm
                inputs={selectedProperty}
                setInputs={setSelectedProperty}
                editMode={true}
              />
              <ImagesUploader
                inputs={selectedProperty}
                setInputs={setSelectedProperty}
                editMode={true}
              />
              <AmenitiesSection
                inputs={selectedProperty}
                setInputs={setSelectedProperty}
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ListProperty;
