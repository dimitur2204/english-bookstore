import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {
  Typography,
  Container, Box, Stack
} from "@mui/material";
import WishlistItem from "../components/WishlistItem";
import AddBookToWishlist from "../components/AddBookToWishlist";


//Our Wishlist page that consists of Header + Paper components that work as a box for adding a book in wishlist
function Wishlist() {
  const [wishlistBooks, setWishlistBooks] = useState([])

  useEffect(() => {
    getBooksFromStorage()
  }, [])

  const getBooksFromStorage = () => {
    const wishlistBooksStorage = JSON.parse(localStorage.getItem('wishlist')) || []

    setWishlistBooks(wishlistBooksStorage)
  }

  return (
    <Container>
      <Header text="Your wishes" />
      <Box position="relative">
        <img src={`${process.env.PUBLIC_URL}/wishlist.svg`} width={125}/>
        <Box position="absolute" top={-20} left={150} display="flex" alignItems="center" justifyContent="center">
          <img src={`${process.env.PUBLIC_URL}/talk-buble.svg`} style={{margin: '-40px'}} width={250}/>
          <Typography position="absolute" left={10} fontSize="0.8rem" minWidth={150}>What other books should I look for? Let me know your wishes!</Typography>
        </Box>
      </Box>

      <Stack spacing={2} mt={3}>

        {wishlistBooks.length === 0 ?
          <Typography textAlign="center" fontSize="1.1rem">
            You have no books in your wishlist. Why don't you add something and wait while I'm doing my magic finding the book?
          </Typography> 
          : wishlistBooks.map((item) => (<WishlistItem key={item.title} title={item.title} author={item.author}/>))}
      </Stack>

      <AddBookToWishlist handleAddBook={getBooksFromStorage}/>
    </Container>
  );
}

export default Wishlist;