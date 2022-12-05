/*
Dumitrita Poiata and Dimitar Nizamov

This is the main page of the app
It renders different header based on the route that you are on
And also filters the posts based on the route that you are on
ex. /category/:categoryName will render the posts that are in that category

It also works as a home page that renders the posts in all categories
*/
import React from "react";
import ImageList from "../components/global/ImageList";
import Header from "../components/Header";
import theme from "../theme";

import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useMatch, useParams } from "react-router-dom";
import _, { capitalize } from "lodash";
import { collection, getFirestore, query, where } from "firebase/firestore";
import firebaseApp from "../firebase-config";
import { usePosts } from "../hooks/usePosts";
import BooksList from "../components/BooksList";

function Slide({ url, title, id }) {
  return (
  <Box as={Link} to={`/post/${id}`}>
    <Box style={{ position: "absolute", bottom: theme.spacing(2), left: theme.spacing(2), zIndex: 1 }}>
    <Typography variant="h2" color={theme.palette.background.paper}>{title}</Typography>
    <Typography lineHeight="0.9" marginTop={theme.spacing(1)} fontSize="0.9rem" fontWeight="light" color={theme.palette.background.paper}>CURRENT BID</Typography>
    <Typography fontSize="1.1rem" fontWeight="bold" color={theme.palette.background.paper}>243€</Typography>

    </Box>
      <img
        style={{
          width: "100%",
          height: 232,
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={url}
        alt={title}
      ></img>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <IconButton style={{}}>
          <FavoriteBorder
            sx={{
              width: "30px",
              height: "30px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: "100px",
              padding: "5px",
            }}
          />
        </IconButton>
      </div>

      <div style={{ position: "absolute", top: "0", right: "0", height: 232, width:"100%", background: "linear-gradient(180deg, rgba(18,17,78,0) 0%, rgba(0,0,0,0.5270702030812324) 57%, rgba(0,0,0,0.8772102591036415) 96%)" }}>
      </div>
    </Box>
  );
}

export default function Category() {
  const { category } = useParams();
  const { postsWithImg, loading } = usePosts(
    query(
      collection(getFirestore(firebaseApp), "posts"),
      category !== "home"
        ? where("category", "==", category.toLowerCase())
        : where("category", "!=", "")
    )
  );
  const matchHome = useMatch('home')
  const clay = postsWithImg?.filter(p => p?.category === 'clay')
  const paintings = postsWithImg?.filter(p => p?.category === 'paintings')
  const featured = matchHome ? postsWithImg?.filter(post => post?.isFeatured && post?.category !== "clay") : postsWithImg?.filter(post => post?.isFeatured)

  return (
    <>
      <Header
        text={capitalize(category)}
        withSearch
        sx={{ marginBottom: theme.spacing(3) }}
      />
      <BooksList />
      <ImageList posts={_.concat(_.take(paintings?.splice(3),3), _.take(clay?.splice(3),3))} title="More of the things you like" />
    </>
  );
}
