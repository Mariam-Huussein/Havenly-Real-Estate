import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

const AmenitiesSection = ({ inputs, setInputs }) => {
  const amenities = ["parking", "wifi", "Backyard", "terrace"];

  const handleAmenitiesChange = (key) => (e) => {
    setInputs((prev) => ({
      ...prev,
      amenities: { ...prev.amenities, [key]: e.target.checked },
    }));
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold">Amenities</Typography>
      <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
        {amenities.map((a) => (
          <FormControlLabel
            key={a}
            control={
              <Checkbox checked={inputs.amenities[a]} onChange={handleAmenitiesChange(a)} />
            }
            label={a.charAt(0).toUpperCase() + a.slice(1)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSection;
