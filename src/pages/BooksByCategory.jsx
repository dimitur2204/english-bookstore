import { Container, ImageList, Typography } from "@mui/material";
import { capitalize } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import Header from "../components/Header";
import useBooks from "../hooks/useBooks";

// MyBook page that displays the books one has purchased as well as books one saves
function MyBooks() {
  //get the current category from the url with a hook from the react-router-dom
  const { category } = useParams();
  const { response: books } = useBooks();
  const filteredBooks = books?.filter((book) => book.genres === category);
  const booksToRender = filteredBooks?.length
    ? filteredBooks.map((item) => (
        <Book height={220} book={item} key={item.img} />
      ))
    : null;
  return (
    <>
      <Header text={capitalize(category)} />
      <Container>
        {booksToRender ? (
          <ImageList cols={2} gap={16}>
            {booksToRender}
          </ImageList>
        ) : (
          <Typography>No books in this category yet!</Typography>
        )}
      </Container>
    </>
  );
}

export default MyBooks;
