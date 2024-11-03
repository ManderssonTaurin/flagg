
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import Dropdown from "../components/Dropdown.jsx";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { Grid, Container, Card, CardContent, Typography, CardMedia, Box, Skeleton  } from "@mui/material";

const Homepage = ({ darkMode, setDarkMode }) => {
  const dataArray = useLoaderData();
  const navigate = useNavigate();

   
  // Loading state
  const [loading, setLoading] =useState(false);



  const sortedCountries = useMemo(
    () => dataArray.sort((a, b) => a.name.common.localeCompare(b.name.common)),
    [dataArray]
  );

  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const regions = [
    { label: "All", value: "All" },
    { label: "Africa", value: "Africa" },
    { label: "Americas", value: "Americas" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
  ];

  const filteredCountries = useMemo(() => {
    return selectedRegion !== "All"
      ? sortedCountries.filter(
          (country) =>
            country.region === selectedRegion &&
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : sortedCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }, [sortedCountries, selectedRegion, searchQuery]);

  useEffect(() => {
    if (filteredCountries.length === 0 && searchQuery) {
      navigate("*");
    }
  }, [filteredCountries, searchQuery, navigate]);

  return (
  <Box sx={{ backgroundColor: darkMode ? "#202C36" : "#ffffff", color: darkMode ? "#fff" : "#000" }} >
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Container maxWidth="lg">
      
      <Box sx={{ my: 4 }}>
        {/* Align Searchbar and Dropdown */}
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} darkMode={darkMode}/>
          </Grid>
          <Grid item xs={12} md={2}>
            <Dropdown options={regions} setSelectedOptions={setSelectedRegion} darkMode={darkMode} />
          </Grid>
        </Grid>
      </Box>

      {/* Flags Grid */}

      
      {loading ? (
          // Display skeletons when loading
          <Grid container spacing={4} justifyContent="center">
            {[...Array(12)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton variant="rectangular" height={140} sx={{ borderRadius: '4px' }} />
                <Skeleton variant="text" width="60%" sx={{ mt: 1 }} />
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="80%" />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container columnSpacing={4} rowSpacing={8} justifyContent="center">
          {filteredCountries.map((flag) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={flag.cca3}>
          <Box
            sx={{
              width: {
                xs: "70%",            // Default 70% on extra-small screens
                sm: "100%",           // Full width on small screens and above
              },
              '@media (max-width: 420px)': {
                width: "100%",        // Full width below 420px
              },
              mx: "auto",             // Centers the Box horizontally when not full width
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: "100%",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                '&:hover': {
                  '& .MuiCardMedia-root': {
                    opacity: 0.8,
                  },
                  '& .MuiCardContent-root': {
                    backgroundColor: darkMode ? "#505b65" : "#f0f0f0",
                  },
                },
              }}
            >
              <Link to={`/country/${flag.cca3}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={flag.flags.png}
                  alt={`Flag of ${flag.name.common}`}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: darkMode ? "#46515b" : "#ffffff",
                    height: "125px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: darkMode ? "#F2F2F2" : "#252525",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {flag.name.common}
                  </Typography>
                  <Typography variant="body2" sx={{ color: darkMode ? "#cccfd1" : "#717171", mt: "6px" }}>
                    <strong>Population:</strong> {flag.population.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: darkMode ? "#cccfd1" : "#717171" }}>
                    <strong>Region:</strong> {flag.region}
                  </Typography>
                  <Typography variant="body2" sx={{ color: darkMode ? "#cccfd1" : "#717171" }}>
                    <strong>Capital:</strong> {flag.capital ? flag.capital[0] : "N/A"}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Box>
        </Grid>
        ))}
      </Grid>
        )}
    </Container>
  </Box>
  );
};

export default Homepage;
