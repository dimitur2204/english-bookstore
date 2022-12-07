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
import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography,
  Unstable_Grid2 as Grid2,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";
import { East, Star, StarBorder, StarHalf } from "@mui/icons-material";

function FeaturedBook() {
  return (
    <Box my={2}>
      <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
        Our choice
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <img
            src={`${process.env.PUBLIC_URL}/cover-1.jpg`}
            style={{ width: "100%" }}
            alt="featured book"
          />
        </Grid2>
        <Grid2 xs={6}>
          <Typography fontWeight="bold" fontSize="1.5rem" mb={1}>
            1984
          </Typography>
          <Typography
            fontWeight="light"
            color="rgba(0,0,0,0.5)"
            lineHeight={1.2}
            fontSize="1rem"
          >
            George Orwell
          </Typography>
          <Typography
            fontWeight="light"
            color="rgba(0,0,0,0.5)"
            lineHeight={1.2}
            fontSize="1rem"
          >
            12 people wish for that
          </Typography>
          <Box>
            <Star
              fontSize="medium"
              sx={{ color: theme.palette.primary.main }}
            />
            <Star
              fontSize="medium"
              sx={{ color: theme.palette.primary.main }}
            />
            <Star
              fontSize="medium"
              sx={{ color: theme.palette.primary.main }}
            />
            <StarHalf
              fontSize="medium"
              sx={{ color: theme.palette.primary.main }}
            />
            <StarBorder
              fontSize="medium"
              sx={{ color: theme.palette.primary.main }}
            />
          </Box>
          <Typography
            fontWeight="light"
            color="rgba(0,0,0,0.5)"
            lineHeight={1.2}
            fontSize="1rem"
          >
            Rated by{" "}
            <a
              style={{ color: "rgba(0,0,0,0.5)" }}
              href="https://www.goodreads.com/"
            >
              GoodReads
            </a>
          </Typography>
          <Typography fontWeight="bold" fontSize="1.5rem" mt={1}>
            240 dkk
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
function WishlistCTA() {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "29px",
        p: 4,
        mb: `calc(72px + ${theme.spacing(2)})`,
      }}
    >
      <Typography fontWeight="bold" color={theme.palette.common.white} mb={1}>
        Do you have a wish{" "}
        <AutoAwesomeIcon sx={{ fill: theme.palette.common.white }} />
      </Typography>
      <Typography color="rgba(255,255,255,0.8)" mb={3}>
        With our{" "}
        <Link style={{ color: "rgba(255,255,255,0.8)" }}>wishlist</Link> you can
        wish for a book that you want us to get on the shelves
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ textAlign: "center" }}>
          <Typography color={theme.palette.common.white} fontWeight="bold">
            19
          </Typography>
          <Typography
            color={theme.palette.common.white}
            fontWeight="light"
            fontSize="1rem"
          >
            Wishers for now
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography color={theme.palette.common.white} fontWeight="bold">
            43
          </Typography>
          <Typography
            color={theme.palette.common.white}
            fontWeight="light"
            fontSize="1rem"
          >
            Wished books
          </Typography>
        </Box>
        <IconButton>
          <East sx={{ fill: theme.palette.common.white }} />
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
        style={{ width: "130vw", marginLeft: "-110px", marginTop:"30px" }}
      />
      <FeaturedBook />
      <BooksList />
      <WishlistCTA />
    </Container>
  );
}
