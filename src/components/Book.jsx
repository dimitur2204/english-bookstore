import {Box, Typography, ImageListItem} from "@mui/material";
import theme from "../theme";
import React, {useState} from "react";
import BookDetails from "./BookDetails";

function Book({book}) {
  const [detailsAreOpen, setDetailsAreOpen] = useState(false)

  return (
    <>
      <ImageListItem onClick={() => setDetailsAreOpen(true)}>
        <img
          src={`${book.img}`}
          alt={book.title}
          loading="lazy"
          style={{height: 160, objectFit: 'cover'}}
        />
        <Typography fontWeight='600' lineHeight="1.2rem">
          {book.title}
        </Typography>
        <Typography fontWeight="light" color='rgba(0,0,0,0.5)' lineHeight={1.2} fontSize="0.8rem">
          {book.author}
        </Typography>
        <Typography fontWeight="light" lineHeight={1.2}  fontSize="1rem" color={theme.palette.primary.main}>
          {book.price} DKK
        </Typography>
      </ImageListItem>
      <BookDetails book={book} isOpen={detailsAreOpen} closeDetails={() => setDetailsAreOpen(false)}/>
    </>
  )
}

export default Book