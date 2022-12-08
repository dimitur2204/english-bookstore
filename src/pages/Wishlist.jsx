import React from "react";
import Header from "../components/Header";
import {
  Typography,
  Paper,
  Container
} from "@mui/material";
import theme from "../theme";


//Our Wishlist page that consists of Header + Paper components that work as a box for adding a book in wishlist
function Wishlist() {
  return (
    <Container>
      <Header text="Wishlist" />
      <Typography
      sx={{display:"flex", justifyContent:"center", textAlign:"center"}}>
        You have 3 items in your wishlist</Typography>
      <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "29px",
        p: 3,
        margin: "1rem",
      }}
    > <Typography sx={{fontWeight:"bold"}}>Tell me how it ends</Typography>
      <Typography>Valeria Luiselli</Typography></Paper>

      <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "29px",
              p: 3,
              margin: "1rem",
            }}
          >
          <Typography sx={{fontWeight:"bold"}}>1984</Typography>
          <Typography>George Orwell</Typography>
      </Paper>

      <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "29px",
              p: 4,
              margin: "1rem",
            }}
          >
          <Typography sx={{fontWeight:"bold"}}>The Plot Against America</Typography>
          <Typography>Phillip Roth</Typography>
          

      </Paper>

      {/* a paper component to be able to add a book to wishlist */}
      <Paper
            sx={{
              backgroundColor: "#E6D4B7",
              borderRadius: "29px",
              p: 2,
              margin: "1rem",
              display:"flex",justifyContent: 'center', alignSelf:'center'
            }}
          ><Typography sx={{fontSize:"4rem", width: "90px", height: "90px", textAlign:"center", fontWeight:"100", border:"2px solid", borderRadius:"50%"}}>+</Typography>
      </Paper>
    </Container>
  );
}

export default Wishlist;