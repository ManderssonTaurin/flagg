import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";


const Dropdown = ({ options, setSelectedOptions, darkMode }) => {
  const [selectedRegion, setSelectedRegion] = React.useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRegion(selectedValue);
    setSelectedOptions(selectedValue); // Update parent with selected value
  };

  return (
    <FormControl
      className="dropdown-custom"
      sx={{ width: {xs: "50%", md: "100%"},       // Ensures FormControl takes up full available width
        maxWidth: {md: '178px'},    // Sets a max width to prevent overflow
        boxSizing: 'border-box', // Ensures padding doesn’t exceed width
            '& .MuiOutlinedInput-root': {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: darkMode ? '#F2F2F2' : '#000000', // Border color when focused
          },
        },

        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: darkMode ? '#FFFFFF' : '#000000', // Border color when hovering
        },
        '& .MuiInputLabel-root': {
          color: darkMode ? '#bdc0c2' : '#545e65', // Initial label color
          '&.Mui-focused': {
            color: darkMode ? '#F2F2F2' : '#000000', // Label color when focused
          },
          '&.MuiInputLabel-shrink': {
            color: darkMode ? '#F2F2F2' : '#717171', // Label color when shrunk
          },
        },
      }}
    >
      <InputLabel id="region-select-label" sx={{ color: darkMode ? '#bdc0c2' : '#545e65' }}>Region</InputLabel>
      <Select
        labelId="region-select-label"
        id="region-select"
        value={selectedRegion}
        label="Region"
        onChange={handleChange}
        className="custom-select"
        sx={{
          backgroundColor: darkMode ? '#202c36' : '#ffffff',
          color: darkMode ? '#F2F2F2' : '#000000',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: darkMode ? '#545e65' : '#cbcbcb', // Initial border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: darkMode ? '#F2F2F2' : '#000000', // Border color when focused
          },
          // Change the text color of the selected item when focused
          '& .MuiSelect-select': {
            color: darkMode ? '#F2F2F2' : '#000000', // Initial text color
          },
          '&.Mui-focused .MuiSelect-select': {
            color: darkMode ? '#F2F2F2' : '#000000', // Text color when focused
          },
          // Arrow color customization
          '& .MuiSelect-icon': {
            color: darkMode ? '#F2F2F2' : '#7f7f7f', // Arrow color
          },
        }}
         MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: darkMode ? '#49545e' : '#ffffff', // Set background color for the entire dropdown list
              '& .MuiMenuItem-root': {
                backgroundColor: darkMode ? '#49545e' : '#ffffff', // Ensure menu items have the same background
              },
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className="list-of-countries"
            sx={{
              backgroundColor: darkMode ? '#49545e' : '#ffffff',
              color: darkMode ? '#F2F2F2' : '#000000',
              '&.Mui-selected': {
                backgroundColor: darkMode ? '#626b72' : '#eeeeee',
                color: darkMode ? '#ffffff' : '#000000',
                "&:hover": {
                  backgroundColor: darkMode ? '#717a81' : '#dddddd', // Change hover color when the item is selected
                },
              },
              '&:hover': {
                backgroundColor: darkMode ? '#5a6369' : '#f0f0f0',
                color: darkMode ? '#ffffff' : '#000000',
              },
              ...(index === 0 && {
                '&.Mui-focusVisible': {
                  backgroundColor: darkMode ? '#626b72' : '#f5f5f5', // Remove background for first item when focused
                },
              }),
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
