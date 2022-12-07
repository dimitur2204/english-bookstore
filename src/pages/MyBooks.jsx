import { Container, ImageList, Typography } from '@mui/material'
import React from 'react'
import Book from '../components/Book'
import { thisWeeksBoooks } from '../components/booksList'
import Header from '../components/Header'
import theme from '../theme'

function MyBooks() {
  return (
    <>
        <Header text="My books" />
      <Container>
        <Typography as="h2" fontSize="2rem" fontFamily="serif" color={theme.palette.common.black}>
            Purchased
        </Typography>
        <ImageList cols={2} gap={16}>
      {thisWeeksBoooks.slice(0, 2).map((item) => (
        <Book height={220} book={item} key={item.img}/>
      ))}
    </ImageList>
    <Typography as="h2" fontSize="2rem" fontFamily="serif" color={theme.palette.common.black}>
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