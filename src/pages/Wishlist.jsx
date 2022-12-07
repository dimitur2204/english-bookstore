/*
Dimitar Nizamov

This is the page that renders when you access /saved
It renders the <ImageList /> component and passes it the posts prop
It currently filters by posts that are for sale, but that is a placeholder since we didn't implement have the time to implement the saved posts feature
*/
import React from "react";
import Header from "../components/Header";


//Our Collection page that consists of Header + ImageList component
function Wishlist() {
  return (
    <>
      <Header text="Wishlist" />
    </>
  );
}

export default Wishlist;
