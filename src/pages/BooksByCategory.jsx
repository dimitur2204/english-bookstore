import { Container, ImageList } from '@mui/material'
import { capitalize } from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import Book from '../components/Book'
import { thisWeeksBoooks } from '../components/booksList'
import Header from '../components/Header'

// MyBook page that displays the books one has purchased as well as books one saves
function MyBooks() {
    //get the current category from the url with a hook from the react-router-dom
    const { category } = useParams();
  return (
    <>
        <Header text={capitalize(category)} />
      <Container>
        <ImageList cols={2} gap={16}>
      {thisWeeksBoooks.map((item) => (
        <Book height={220} book={item} key={item.img}/>
      ))}
    </ImageList>
    </Container>
    </>
  )
}

export default MyBooks