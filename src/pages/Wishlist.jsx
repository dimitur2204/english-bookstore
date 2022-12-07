/*
Dimitar Nizamov

This is the page that renders when you access /saved
It renders the <ImageList /> component and passes it the posts prop
It currently filters by posts that are for sale, but that is a placeholder since we didn't implement have the time to implement the saved posts feature
*/
import React from "react";
import Header from "../components/Header";
import {
  Typography,
  Paper,
  IconButton
} from "@mui/material";
import theme from "../theme";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


//Our Collection page that consists of Header + ImageList component
function Wishlist() {
  return (
    <>
      <Header text="Wishlist" />
      <Typography>You have 3 items in your wishlist</Typography>
      <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "29px",
        p: 4,
        margin: "1rem",
      }}
    > <Typography>Tell me how it ends</Typography>
      <Typography>Valeria Luiselli</Typography></Paper>

      <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "29px",
              p: 4,
              margin: "1rem",
            }}
          >
          <Typography>1984</Typography>
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
          <Typography>The Plot Against America</Typography>
          <Typography>Phillip Roth</Typography>

      </Paper>

      <Paper
            sx={{
              backgroundColor: "#E6D4B7",
              borderRadius: "29px",
              p: 4,
              margin: "1rem",
            }}
          >
      </Paper>

    </>
  );
}

export default Wishlist;
