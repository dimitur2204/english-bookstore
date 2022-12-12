/*

This is the home page of the app
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
import { useBooks } from "../hooks/useBooks";
// A chosen book that is recommended by us
function FeaturedBook({ book }) {
  return (
    <Box my={2}>
      <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
        Our choice
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <img
            src={book?.image}
            style={{ width: "100%" }}
            alt={book?.item_title}
          />
        </Grid2>
        <Grid2 xs={6}>
          <Typography fontWeight="bold" fontSize="1.5rem" mb={1}>
            {book?.item_title}
          </Typography>
          <Typography
            fontWeight="light"
            color="rgba(0,0,0,0.5)"
            lineHeight={1.2}
            fontSize="1rem"
          >
            {book?.author}
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
          {/* Link to who the book was rated by */}
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
            {book?.price} dkk
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
// Box informing about the wishlist option
function WishlistCTA() {
  return (
    <Paper
      sx={{
        backgroundColor: "#2F2E41",
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
        <Link style={{ color: "rgba(255,255,255,0.8)" }} to={"./wishlist"}>wishlist</Link> you can
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
          <Link to={"./wishlist"}>
          <East sx={{ fill: theme.palette.common.white }} />
          </Link>
        </IconButton>
      </Box>
    </Paper>
  );
}
// an svg image of a woman reading a book, placed on top of the page
export default function Home() {
  const { response: books } = useBooks();
  const featuredBook = books?.find((b) => b["is-our-choice"]);
  const thisWeeksBooks = books?.filter(
    (b) => b.isweekchoice && b["is-our-choice"] === false
  );
  return (
    <Container>
      <Header withSearch sx={{ marginBottom: theme.spacing(-13) }} />
      <img
        src={`${process.env.PUBLIC_URL}/woman-reading.svg`}
        alt="A woman reading a book"
        style={{ width: "130vw", marginLeft: "-110px", marginTop: "30px" }}
      />
      <FeaturedBook book={featuredBook} />
      {thisWeeksBooks ? <BooksList books={thisWeeksBooks} /> : null}
      <WishlistCTA />
    </Container>
  );
}
