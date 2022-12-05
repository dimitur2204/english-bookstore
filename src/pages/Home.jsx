/*
Dumitrita Poiata and Dimitar Nizamov

This is the main page of the app
It renders different header based on the route that you are on
And also filters the posts based on the route that you are on
ex. /category/:categoryName will render the posts that are in that category

It also works as a home page that renders the posts in all categories
*/
import React from "react";
import Header from "../components/Header";
import theme from "../theme";
import BooksList from "../components/BooksList.jsx";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";
import { East } from "@mui/icons-material";

function WishlistCTA() {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "29px",
        p: 4,
      }}
    >
      <Typography fontWeight="bold" color={theme.palette.common.white} mb={1}>
        Do you have a wish{" "}
        <AutoAwesomeIcon sx={{ fill: theme.palette.common.white }} />
      </Typography>
      <Typography color="rgba(255,255,255,0.8)" mb={3}>
        With our{" "}
        <Link style={{ color: "rgba(255,255,255,0.8)" }}>wishlist</Link> you can
        make it happen
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ textAlign: "center" }}>
          <Typography color={theme.palette.common.white} fontWeight="bold">
            256
          </Typography>
          <Typography color={theme.palette.common.white} fontWeight="light" fontSize="1rem">
            Wishers for now
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography color={theme.palette.common.white} fontWeight="bold">
            43
          </Typography>
          <Typography color={theme.palette.common.white} fontWeight="light" fontSize="1rem">
            Wished books
          </Typography>
        </Box>
        <IconButton>
          <East sx={{fill: theme.palette.common.white}}/>
        </IconButton>
      </Box>
    </Paper>
  );
}
export default function Home() {
  return (
    <Container>
      <Header withSearch sx={{ marginBottom: theme.spacing(-13) }} />
      <img
        src={`${process.env.PUBLIC_URL}/woman-reading.svg`}
        alt="A woman reading a book"
        style={{ width: "120vw", marginLeft: "-110px" }}
      />
      <BooksList />
      <WishlistCTA />
    </Container>
  );
}
