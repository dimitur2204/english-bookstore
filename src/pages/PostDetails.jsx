/*
Dumitrita Poiata and Dimitar Nizamov

This is the page that renders when you access /post/:id
Fetches the post data from the database based on the id from the url and passes it to the <PostDetails /> component
*/
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Typography, Button, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Container } from "@mui/system";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  AutoAwesomeMotion,
  AutoAwesomeMotionOutlined,
} from "@mui/icons-material";
import theme from "../theme";
import ListUsers from "../components/ListUsers";
import { useParams } from "react-router-dom";
import { useSinglePost } from "../hooks/useSinglePost";
import Header from "../components/Header";

//local component for the "slideshow"
function Slide({ url, title }) {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  return (
    <div>
      {/* //the image that can be seen in the slider */}
      <img
        style={{ width: "100%", height: 260, objectFit: "cover" }}
        src={url}
        alt={title}
      ></img>
      {/* icons for likes and saves  */}
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <IconButton
          variant={liked ? "outlined" : "contained"}
          onClick={() => setLiked(!liked)}
        >
          {!liked ? (
            <FavoriteBorder
              sx={{
                width: "30px",
                height: "30px",
                color: "white",
                backgroundColor: theme.palette.background.icon,
                borderRadius: "100px",
                padding: "5px",
              }}
            />
          ) : (
            <Favorite
              sx={{
                width: "30px",
                height: "30px",
                color: "white",
                backgroundColor: theme.palette.background.icon,
                borderRadius: "100px",
                padding: "5px",
              }}
            />
          )}
        </IconButton>
        <IconButton onClick={() => setSaved(!saved)}>
          {saved ? (
            <AutoAwesomeMotion
              sx={{
                width: "30px",
                height: "30px",
                color: "white",
                borderRadius: "100px",
                backgroundColor: theme.palette.background.icon,
                padding: "5px",
              }}
            />
          ) : (
            <AutoAwesomeMotionOutlined
              sx={{
                width: "30px",
                height: "30px",
                color: "white",
                borderRadius: "100px",
                backgroundColor: theme.palette.background.icon,
                padding: "5px",
              }}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
}
export default function PostDetails() {
  const [timer, setTimer] = useState(86400 * 2 + 3600 * 4 + 60 * 50 + 43); //setting the timer for 2 days, 4 hours ...
  useEffect(() => {
    const intervalId = setInterval(() => setTimer((timer) => timer - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timer, setTimer]);
  const { id } = useParams();
  const { postWithImg } = useSinglePost(id);
  return (
    <>
      <Header withBackButton />
      {/* the slideshow */}
      <Swiper
        // the bulltes that show the page you are on and the arrows
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide url={postWithImg?.url} title={postWithImg?.title} />
        </SwiperSlide>
      </Swiper>

      {/* everything underneath the slideshow */}
      <Container
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3) }}
      >
        <Typography>UP FOR AUCTION</Typography>
        <Typography variant="h2" style={{ padding: "10px 0" }}>
          {postWithImg?.title}
        </Typography>
        <Typography>{postWithImg?.description}</Typography>

        <div
          style={{
            display: "flex",
            gap: "15px",
            margin: "30px 0",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              disableElevation
              style={{ width: "100px", height: "40px" }}
            >
              Bid
            </Button>

            <IconButton style={{}}>
              <RemoveRedEyeIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  borderRadius: "100px",
                  backgroundColor: theme.palette.background.landing,
                  padding: "5px",
                }}
              />
            </IconButton>
          </div>
          {/* displaying the timer */}
          <Typography>
            Closes in:
            {/* checking if the remaining amount is divisible by the number of seconds that make up a day/ hour/ minutes and then continues */}
            {` ${Math.floor(timer / 86400)}d ${Math.floor(
              (timer % 86400) / 3600
            )}h ${Math.floor((timer % 3600) / 60)}m ${Math.floor(timer % 60)}s`}
          </Typography>
        </div>
        <Typography>Bid history</Typography>
        <ListUsers />
      </Container>
    </>
  );
}
