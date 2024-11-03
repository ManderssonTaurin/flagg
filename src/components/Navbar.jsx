
import whiteLogo from "../assets/techover-logo.png"
import darkLogo from "../assets/techover-logo-dark.png" 
import { Grid, Container, Card, CardContent, Typography, CardMedia, Box, Button, ThemeProvider  } from "@mui/material";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


const Navbar = ({ darkMode, setDarkMode }) => {

    const toggleDarkMode = () => { 
        setDarkMode(!darkMode); // Toggle between true (dark mode) and false (light mode)
    }

    

    return ( 

        
        <Box 
        sx={{
            height: "64px",
            backgroundColor: darkMode ? "#3e4952" : "#ffffff", 
            width: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            
        }}
        >
            <Container maxWidth="lg">
                <Box sx={{  
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "64px", 
                    width: "100%"
                    
                    }} >
                    <Typography sx={{
                    fontSize: "20px",
                    color: darkMode ? "#ffffff" : "#212121" 
                    }}
            
                    >The Flag App</Typography>
                    <Box
                        component="img"
                        src= {darkMode ? whiteLogo : darkLogo}
                        alt="TechOver logo"
                        sx={{
                            display: {
                                xs: 'none', // Hide on extra small screens (0-600px)
                                sm: 'none', // Hide on small screens (600-900px)
                                md: 'block', // Show on medium screens and up (900px and above)
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={toggleDarkMode}
                        startIcon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                        
                        sx={{
                            backgroundColor: darkMode ? "#3e4952" : "#fff",
                            color: darkMode ? "#fff" : "#000",
                            textTransform: "none",
                            boxShadow: "none",
                            padding: "6px 5px",
                            '&:hover': {
                                backgroundColor: darkMode ? "#515d64" : "#f0f0f0",
                                boxShadow: "none",
                            }
                        }}
                    >
                        {darkMode ? "DARK MODE" : "LIGHT MODE"}
                    </Button>
               
            
                </Box>
            </Container>

            
            
            



        </Box>
     );
}
 
export default Navbar;
