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
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Header
        withSearch
        sx={{ marginBottom: theme.spacing(-13) }}
      />
    <img src={`${process.env.PUBLIC_URL}/woman-reading.svg`} alt="A woman reading a book" style={{width: "120vw", marginLeft: "-110px"}}/>
      <BooksList />
    </Container>
  );
}
