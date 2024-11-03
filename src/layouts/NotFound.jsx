import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Grid, Container, Typography, Box, Button } from "@mui/material";
import darkArrow from "../assets/dark-arrow.svg"
import lightArrow from "../assets/light-arrow.svg"

const NotFound = ({darkMode, setDarkMode}) => {
    return (
        <Box>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Container>
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
                <Box sx={{color: darkMode ? "#F2F2F2" : "#212121"}} >Could not find that country!</Box>





            </Container>

            
            
        </Box>
    );
};

export default NotFound;
