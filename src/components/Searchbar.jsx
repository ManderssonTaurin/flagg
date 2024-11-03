import React from 'react';
import { TextField } from '@mui/material';



const Searchbar = ({ searchQuery, setSearchQuery, darkMode }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the parent component with the search query
  };

  return (
    <TextField
      label="Search for a country"
      variant="outlined"
      value={searchQuery}
      onChange={handleSearchChange}
      sx={{
        width: { xs: '100%', lg: '375px' },
        borderRadius: '4px',
        '& .MuiOutlinedInput-root': {
          
          '& fieldset': {
            borderColor: darkMode ? '#5c646a' : '#cbcbcb',  // Border color based on mode
          },
          '&:hover fieldset': {
            borderColor: darkMode ? '#FFFFFF' : '#000000',  // Hover state border color
          },
          '&.Mui-focused fieldset': {
            borderColor: darkMode ? '#F2F2F2' : '#000000',  // Focused state border color
          },
        },
        '& .MuiInputLabel-root': {
          color: darkMode ? '#c4c6c8' : '#545e65',  // Label color for light and dark modes
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: darkMode ? '#F2F2F2' : '#000000',  // Label color when focused
        },
      }}
      InputProps={{
        style: {
          backgroundColor: darkMode ? '#202c36' : '#ffffff',  // Dynamic background color for input field
          color: darkMode ? '#c4c6c8' : '#000000',  // Input text color for both modes
        },
      }}
    />
  );
};

export default Searchbar;
