import React from "react";
import { Box, Button, ImageList, Typography } from "@mui/material";
import Book from "./Book";
function BooksList({ books }) {
  const [all, setAll] = React.useState(false);
  //split books array in first three elements
  //and the rest of the elements
  const [thisWeeksBoooks, thisWeeksBooksMore] = React.useMemo(() => {
    const firstThree = books.slice(0, 3);
    const rest = books.slice(3);
    return [firstThree, rest];
  }, [books]);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold" fontSize="1.5rem" mb={1}>
          This week's
        </Typography>
        <Button onClick={() => setAll(!all)} variant="text">
          See {all ? "less" : "all"}
        </Button>
      </Box>
      <ImageList cols={3} gap={16}>
        {thisWeeksBoooks.map((item) => (
          <Book book={item} key={item.id} />
        ))}
        {all &&
          thisWeeksBooksMore.map((item) => <Book book={item} key={item.id} />)}
      </ImageList>
    </>
  );
}

export default BooksList;
