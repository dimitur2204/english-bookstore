import { Typography, ImageListItem } from "@mui/material";
import theme from "../theme";
import React, { useState } from "react";
import BookDetails from "./BookDetails";
import styled from "@emotion/styled";

const LineClampTypography = styled(Typography)`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Book({ book, height }) {
  const [detailsAreOpen, setDetailsAreOpen] = useState(false);

  return (
    <>
      <ImageListItem onClick={() => setDetailsAreOpen(true)}>
        <img
          src={`${book.image}`}
          alt={book.item_title}
          loading="lazy"
          style={{
            height: height ?? 160,
            maxHeight: height ?? 160,
            objectFit: "cover",
          }}
        />
        <LineClampTypography
          fontWeight="600"
          lineHeight="1.2rem"
          mt={1}
          height={38.5}
        >
          {book.item_title}
        </LineClampTypography>
        <LineClampTypography
          fontWeight="light"
          color="rgba(0,0,0,0.5)"
          lineHeight={1.2}
          fontSize="0.8rem"
          height={30}
        >
          {book.author}
        </LineClampTypography>
        <Typography
          fontWeight="light"
          lineHeight={1.2}
          fontSize="1rem"
          color={theme.palette.primary.main}
        >
          {book.price} DKK
        </Typography>
      </ImageListItem>
      <BookDetails
        book={book}
        isOpen={detailsAreOpen}
        closeDetails={() => setDetailsAreOpen(false)}
      />
    </>
  );
}

export default Book;
