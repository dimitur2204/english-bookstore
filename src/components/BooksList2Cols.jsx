import Book from "./Book";
import {ImageList, Typography} from "@mui/material";

function BooksList2Cols({books, noBooksText}) {
  const booksToRender = books?.length
    ? books.map((item) => (
      <Book height={220} book={item} key={item.img} />
    ))
    : null;

  return (
    <>
      {booksToRender ? (
          <ImageList cols={2} gap={16}>
            {booksToRender}
          </ImageList>
          // if no books are put into a category, the text below will be displayed
        ) : (
          <Typography textAlign="center">{noBooksText}</Typography>
        )}
    </>
  )
}

export default BooksList2Cols;