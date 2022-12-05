/*
Dimitar Nizamov

The main account page that renders when you access /account,
Displays the user's account information and a follow button
Also renders a list with the user's posts
*/
import { Avatar, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ImageList from "../components/global/ImageList";
import theme from "../theme";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { usePosts } from "../hooks/usePosts";
import ImageListSkeleton from "../components/skeletons/ImageListSkeleton";

const auth = getAuth(firebaseApp);

export default function Account() {
  const [followed, setFollowed] = React.useState(false);
  const [user] = useAuthState(auth);

  const { postsWithImg } = usePosts(
    query(
      collection(getFirestore(firebaseApp), "posts"),
      where("authorId", "==", user.uid)
    )
  );
  return (
    <>
      <Header text="My Exhibition" withAccountOptions />
      {/* container containing the infromation of a user (img/name/intro/SoMe) */}
      <Container
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3) }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <Avatar
              sx={{ width: 90, height: 90 }}
              src={user.photoURL}
              alt={`${user.displayName}'s profile pic`}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1rem",
            }}
          >
            <div>
              <Typography fontSize="1.5rem">
                {user.displayName || user.email}
              </Typography>
            </div>

            {/* social media icons  */}
            <div>
              <IconButton
                href="https://www.linkedin.com/in/katerina-kolarova-b4549514a/"
                style={{ color: "#000" }}
                target="_blank"
                aria-label="linkedin page"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                href="https://www.instagram.com/_chaos_is_my_middle_name/"
                style={{ color: "#000" }}
                target="_blank"
                aria-label="instagram page"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                href={`mailto:${user.email}`}
                style={{ color: "#000" }}
                target="_blank"
                aria-label="email"
              >
                <AlternateEmailIcon />
              </IconButton>
            </div>
            <div>
              <Button
                variant={followed ? "outlined" : "contained"}
                onClick={() => setFollowed(!followed)}
                disableElevation
              >
                {" "}
                {followed ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </div>
        </div>

        {/* an introduction of a user */}
        <Typography style={{ marginTop: "1.5rem" }}>
          📍A freelance copywriter based in Aalborg.
        </Typography>
        <Typography>
          🎨There are no mistakes in art, just happy little accidents.
        </Typography>
        <Typography>🤤 Hungry for visuals.</Typography>
      </Container>
      {postsWithImg?.length ? (
        <ImageList posts={postsWithImg} count="5.6k" />
      ) : (
        <ImageListSkeleton noTitle length={3} />
      )}
    </>
  );
}
