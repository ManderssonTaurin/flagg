
import { useLoaderData, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { Grid, Container, Typography, Box, Button, Skeleton  } from "@mui/material";
import darkArrow from "../assets/dark-arrow.svg"
import lightArrow from "../assets/light-arrow.svg"
import { useState, useEffect } from "react";

const Countrypage = ({darkMode, setDarkMode}) => {
    const flaggData = useLoaderData();
    const country = flaggData[0]; // Since data is returned as an array

    // loading state
    const [loading, setLoading] =useState(false);



    // Handling native name dynamically
    const nativeNames = country.name.nativeName
     ? Object.values(country.name.nativeName)[0]?.common || "N/A"
     : "N/A";

    // Extracting top-level domain (TLD)
    const topLevelDomain = country.tld ? country.tld[0] : "N/A";

    // Extracting currencies and joining into a string
    const currencies = country.currencies
        ? Object.values(country.currencies).map(currency => currency.name).join(', ')
        : "N/A";

    // Extracting languages and joining into a string
    const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : "N/A";

    return ( 
        <Box>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container maxWidth="lg">
                {/* Back Button */}
                <Button
                    variant="contained"
                    component={Link}
                    to="/"
                    sx={{ 
                        my: 3,
                        
                        textTransform: "none", 
                        backgroundColor: "transparent",
                        boxShadow: "none", 
                        paddingLeft: 1, // Adjust or remove left padding
                        '&:hover': {
                            backgroundColor: darkMode ? "#525d65" : "#e4e3e4",  
                            color: darkMode ? "#fff" : "#212121", 
                            boxShadow: "none", 

                        }
                        

                     }}
                >
                    
                    <img src={darkMode ? lightArrow : darkArrow} alt="Back-buttom" width="15" height="15" />
                    <span style={{ marginLeft: "8px", color: darkMode ? "#F2F2F2" : "#252525" }}>BACK</span>
                </Button>

                {/* Flag and Country Info */}

                {/* Conditional Rendering for Skeleton and Actual Content */}
                {loading ? (
                    // Show skeleton while loading
                    <Grid container spacing={8} alignItems="flex-start" sx={{ marginTop: "20px" }}>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: '10px' }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="text" width="60%" height={50} sx={{ mb: 2 }} />
                            <Skeleton variant="text" width="40%" height={30} sx={{ mb: 2 }} />
                            <Skeleton variant="text" width="50%" height={30} sx={{ mb: 2 }} />
                            <Skeleton variant="text" width="70%" height={30} />
                            <Skeleton variant="text" width="50%" height={30} sx={{ mt: 4 }} />
                            <Skeleton variant="text" width="70%" height={30} sx={{ mb: 2 }} />
                        </Grid>
                    </Grid>
                ) : (
                <Grid container spacing={8} alignItems="flex-start" sx={{marginTop: "20px"}}>
                    {/* Flag Image */}
                    <Grid item xs={12} md={6}>
                        <img
                            src={country.flags.svg}
                            alt={`Flag of ${country.name.common}`}
                            style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius:"10px" }}
                        />
                    </Grid>

                    {/* Country Information */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" gutterBottom sx={{color: darkMode ? "#F2F2F2" : "#252525"}} >{country.name.common}</Typography>
                        <Grid container spacing={2}>
                            {/* Left Column */}
                            <Grid item xs={12} sm={6} >
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1 }} ><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1 }} ><strong>Region:</strong> {country.region}</Typography>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1 }} ><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</Typography>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525" }} ><strong>Native Name:</strong> {nativeNames}</Typography>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} sm={6}>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1  }} ><strong>Top Level Domain:</strong> {topLevelDomain}</Typography>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1  }} ><strong>Currencies:</strong> {currencies}</Typography>
                                <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525", mb:1  }} ><strong>Languages:</strong> {languages}</Typography>
                            </Grid>
                        </Grid>

                        {/* Border Countries */}
                        <Box mt={4} sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            marginTop: 7
                            }} >
                            <Typography variant="body1" gutterBottom sx={{ color: darkMode ? "#F2F2F2" : "#252525" }}><strong>Border Countries:</strong></Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    overflowX: 'auto',  // Enables horizontal scroll
                                    whiteSpace: 'nowrap',  // Prevents items from wrapping to a new line
                                    gap: 2,  // Adds space between buttons
                                    paddingBottom: 1, // Adds some padding to prevent the scrollbar from overlapping buttons
                                    scrollBehavior: 'smooth', // Smooth scroll when using scrollbar or drag
                                    maxWidth: '100%',  // Ensures the container doesn't exceed the viewport
                                    
                                    height: 'auto',
                                    border: '1px solid transparent' // Ensure the box has some space for the scrollbar
                                }}
                            >
                                {country.borders && country.borders.length > 0 ? (
                                    country.borders.map((borderCode, i) => (
                                        <Button
                                            key={i}
                                            variant="outlined"
                                            component={Link}
                                            to={`/country/${borderCode}`}
                                            sx={{ 
                                                color: darkMode ? "#F2F2F2" : "#212121",
                                                fontSize: "13px",
                                                backgroundColor: darkMode ? "#434e57" : "#eeeeee",
                                                borderColor: darkMode ? "#434e57" : "#eeeeee",
                                                borderRadius: "20px",
                                                width: '51px',  
                                                height: '32px',  
                                                '&:hover': {
                                                    backgroundColor: darkMode ? "#525d65" : "#e4e3e4",  // Hover background color
                                                    borderColor: darkMode ? "#525d65" : "#e4e3e4",  // Hover border color matches hover background
                                                },
                                                
                                                minWidth: '10px',  // Increase min-width to force overflow
                                                whiteSpace: 'nowrap',
                                                flexShrink: 0 // Prevent shrinking to fit the container width
                                            }}
                                        >
                                            {borderCode}
                                        </Button>
                                    ))
                                ) : (
                                    <Typography sx={{ color: darkMode ? "#F2F2F2" : "#252525" }}>No border countries</Typography>
                                )}
                            </Box>
                        </Box>

                    </Grid>
                </Grid> 
                )}
            </Container>
        </Box>
    );
};

export default Countrypage;
