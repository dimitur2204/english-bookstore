import { Container, ImageList, Typography } from "@mui/material";
import { capitalize } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import Header from "../components/Header";
import {useBookContext} from "../context/BookContext";
import BooksList2Cols from "../components/BooksList2Cols";

// MyBook page that displays the books one has purchased as well as books one saves
function MyBooks() {
  //get the current category from the url with a hook from the react-router-dom
  const { category } = useParams();
  const { books } = useBookContext();
  const filteredBooks = books?.filter((book) => book.genres === category);

    // if books are put into a category, they will appear there. 
  return (
    <>
      <Header text={capitalize(category)} />
      <Container>
        <BooksList2Cols books={filteredBooks} noBooksText="No books in this category yet!"/>
      </Container>
    </>
  );
}

export default MyBooks;