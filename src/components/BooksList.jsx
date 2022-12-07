import React from 'react'
import { Box, Button, ImageList, Typography } from '@mui/material'
import { thisWeeksBoooks, thisWeeksBooksMore } from './booksList.js'
import Book from "./Book";

function BooksList() {
    const [all, setAll] = React.useState(false)
  return (
    <>
    <Box display="flex" justifyContent='space-between'>
    <Typography fontWeight="bold" fontSize="1.5rem" mb={1}>This week's</Typography>
    <Button onClick={() => setAll(!all)} variant="text">See {all ? 'less' : 'all'}</Button>
    </Box>
    <ImageList cols={3} gap={16}>
      {thisWeeksBoooks.map((item) => (
        <Book book={item} key={item.img}/>
      ))}
      {all && thisWeeksBooksMore.map((item) => (
        <Book book={item} key={item.img}/>
      ))}
    </ImageList>
    </>

  )
}

export default BooksList