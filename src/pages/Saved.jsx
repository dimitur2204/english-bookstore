/*
Dimitar Nizamov

This is the page that renders when you access /saved
It renders the <ImageList /> component and passes it the posts prop
It currently filters by posts that are for sale, but that is a placeholder since we didn't implement have the time to implement the saved posts feature
*/
import { collection, getFirestore, query } from "firebase/firestore";
import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import firebaseApp from "../firebase-config";
import { usePosts } from "../hooks/usePosts";

//Our Collection page that consists of Header + ImageList component
function Saved() {
  const { postsWithImg } = usePosts(
    query(collection(getFirestore(firebaseApp), "posts"))
  );

  return (
    <>
      <Header text="Collection" />
      <ImageList posts={postsWithImg?.filter(post => post?.isForSale)} />
    </>
  );
}

export default Saved;
