import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const PropertyForm = ({ inputs, setInputs, editMode = true }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["bedrooms", "bathrooms", "garages"].includes(name)) {
      setInputs((prev) => ({
        ...prev,
        facilities: { ...prev.facilities, [name]: Number(value) },
      }));
    } else if (name === "propertyType") {
      setInputs((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Property Name"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Description"
        name="description"
        value={inputs.description}
        onChange={handleChange}
        multiline
        rows={3}
        size="small"
      />
      <Box display="flex" gap={2} flexWrap="wrap">
        <TextField
          label="City"
          name="city"
          value={inputs.city}
          onChange={handleChange}
          size="small"
        />
        <TextField
          label="Country"
          name="country"
          value={inputs.country}
          onChange={handleChange}
          size="small"
        />
        <TextField
          label="Address"
          name="address"
          value={inputs.address}
          onChange={handleChange}
          size="small"
        />
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap">
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Property Type</InputLabel>
          <Select
            value={inputs.propertyType}
            name="propertyType"
            onChange={handleChange}
            label="Property Type"
          >
            <MenuItem value={0}>House</MenuItem>
            <MenuItem value={1}>Villa</MenuItem>
            <MenuItem value={2}>Apartment</MenuItem>
            <MenuItem value={3}>Penthouse</MenuItem>
            <MenuItem value={4}>Land</MenuItem>
          </Select>
        </FormControl>

        {!editMode && (
          <>
            <TextField
              label="Bedrooms"
              name="numberOfBeds"
              type="number"
              value={inputs.numberOfBeds || ""}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  numberOfBeds: Number(e.target.value),
                }))
              }
              size="small"
            />

            <TextField
              label="Bathrooms"
              name="numberOfBathrooms"
              type="number"
              value={inputs.numberOfBathrooms || ""}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  numberOfBathrooms: Number(e.target.value),
                }))
              }
              className={editMode && "hidden"}
              size="small"
            />

            <TextField
              label="Garages"
              name="numberOfParking"
              type="number"
              value={inputs.numberOfParking || ""}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  numberOfParking: Number(e.target.value),
                }))
              }
              className={editMode && "hidden"}
              size="small"
            />
          </>
        )}

        <TextField
          label="Area"
          name="area"
          type="number"
          value={inputs.area}
          onChange={handleChange}
          size="small"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={inputs.price}
          onChange={handleChange}
          size="small"
        />
      </Box>
    </Box>
  );
};

export default PropertyForm;
