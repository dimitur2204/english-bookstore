import { Container, ImageList, Typography } from '@mui/material'
import React from 'react'
import Book from '../components/Book'
import Header from '../components/Header'

// MyBook page that displays the books one has purchased as well as books one saves
function MyBooks() {
  const currentlySavedBooks = JSON.parse(localStorage.getItem('savedBooks')) || []
  return (
    <>
        <Header text="My books" />
      <Container>
        <Typography  fontWeight="bold" fontSize="1.5rem" mb={2}>
            Purchased
        </Typography>
        <Typography cols={2} gap={16}>
        No books purchased yet!
    </Typography>
    <Typography  fontWeight="bold" fontSize="1.5rem" mb={2}>
            Saved
        </Typography>
        <ImageList cols={2} gap={16}>
      {currentlySavedBooks.slice(0, 2).map((item) => (
        <Book height={220} book={item} key={item.img}/>
      ))}
    </ImageList>
    </Container>
    </>
  )
}

export default MyBooks