import { Box, Chip, SwipeableDrawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bookmark, BookmarkBorderOutlined, Close } from "@mui/icons-material";
import { capitalize, cloneDeep, isEqual } from "lodash";
import BuyBook from "./BuyBook";

// A function that handles saving a book as liked books
function BookDetails({ book, isOpen, closeDetails }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  //if users open book details, they can see if a book is saved or not (book mark icon is filled or empty)
  useEffect(() => {
    if (isOpen) {
      const currentlySavedBooks = JSON.parse(
        localStorage.getItem("savedBooks")
      );
      const savedBooks = cloneBooks(currentlySavedBooks);

      const bookIndex = savedBooks.findIndex((bookStorage) =>
        isEqual(book, bookStorage)
      );
      setIsBookmarked(bookIndex >= 0);
    }
  }, [isOpen]);

  //copy of objects to prevent mutation of the previous objects 
  const cloneBooks = (booksToClone) => {
    return cloneDeep(
      !booksToClone || booksToClone.length === 0 ? [] : booksToClone
    );
  };

  useEffect(() => {
    if (isOpen) {
      const currentlySavedBooks = JSON.parse(
        localStorage.getItem("savedBooks")
      );

      let savedBooks = cloneBooks(currentlySavedBooks);

      const bookIndex = savedBooks.findIndex((bookStorage) =>
        isEqual(book, bookStorage)
      );

      //if there is no saved book in the local storage yet and user saves a book, it will be automatically saved as the first book
      if (isBookmarked) {
        if (savedBooks.length === 0) {
          savedBooks = [book];
          //if a user deletes a book from the saved section, the created gap automatically disappears, books are pushed
        } else {
          bookIndex === -1 && savedBooks.push(book);
        }
      } else {
        if (bookIndex >= 0) {
          savedBooks.splice(bookIndex, 1);
        }
      }
      localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    }
  }, [isBookmarked]);

  const toggleIsBookmarked = () => setIsBookmarked((prevState) => !prevState);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDetails}
      PaperProps={{ style: { borderRadius: "50px 50px 0 0" } }}
    >
      <Box px={3} pb={2}>
        <Box my={1} textAlign="right">
          <Close fontSize="medium" onClick={closeDetails} />
        </Box>

        {/* space for a book cover */}
        <img
          src={book?.image}
          alt={book?.item_title}
          width="100%"
          height="350"
          style={{ objectFit: "cover" }}
        />

        <Box display="flex" justifyContent="space-between">
          {/* space for a book title */}
          <Typography
            fontWeight="600"
            lineHeight="1.8rem"
            fontSize="1.8rem"
            mt={0.5}
            color="#202504"
          >
            {book?.item_title}
          </Typography>

          {isBookmarked ? (
            <Bookmark fontSize="large" onClick={toggleIsBookmarked} />
          ) : (
            <BookmarkBorderOutlined
              fontSize="large"
              onClick={toggleIsBookmarked}
            />
          )}
        </Box>
        {/* space for a book author */}
        <Typography
          fontWeight="light"
          color="rgba(0,0,0,0.5)"
          lineHeight={1.2}
          fontSize="1rem"
          mb={2}
        >
          by {book?.author}
        </Typography>

        {/* if book has no genre assigned, the genre (empty) will not appear in the book details */}
        {!!book?.genres && (
          <Box>
            <Typography fontSize="1rem" color="#202504">
              Genres
            </Typography>

            <Box display="flex" gap={1}>
              <Chip
                label={capitalize(book?.genres)}
                variant="outlined"
                style={{ borderRadius: 4 }}
              />
            </Box>
          </Box>
        )}
     {/* space for a book price */}
        <Typography mt={1.5} mb={3.5}>
          Price: {book?.price} DKK
        </Typography>

        <BuyBook />
      </Box>
    </SwipeableDrawer>
  );
}

export default BookDetails;

