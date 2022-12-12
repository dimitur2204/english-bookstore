import { Container, ImageList, Typography } from '@mui/material'
import React from 'react'
import Book from '../components/Book'
import { thisWeeksBoooks } from '../components/booksList'
import Header from '../components/Header'

// MyBook page that displays the books one has purchased as well as books one saves
function MyBooks() {
  return (
    <>
        <Header text="My books" />
      <Container>
        <Typography  fontWeight="bold" fontSize="1.5rem" mb={2}>
            Purchased
        </Typography>
        <ImageList cols={2} gap={16}>
      {thisWeeksBoooks.slice(0, 2).map((item) => (
        <Book height={220} book={item} key={item.img}/>
      ))}
    </ImageList>
    <Typography  fontWeight="bold" fontSize="1.5rem" mb={2}>
            Saved
        </Typography>
        <ImageList cols={2} gap={16}>
      {thisWeeksBoooks.slice(0, 2).map((item) => (
        <Book height={220} book={item} key={item.img}/>
      ))}
    </ImageList>
    </Container>
    </>
  )
}

export default MyBooks