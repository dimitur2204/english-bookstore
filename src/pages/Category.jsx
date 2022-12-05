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
import { useParams } from "react-router-dom";
import { capitalize } from "lodash";
import BooksList from "../components/BooksList";

export default function Home() {
  const { category } = useParams();
  return (
    <>
      <Header
        withSearch
        sx={{ marginBottom: theme.spacing(-13) }}
      />
    <img src="woman-reading.svg" alt="A woman reading a book" style={{width: "120vw", marginLeft: "-110px"}}/>
      <BooksList />
    </>
  );
}
