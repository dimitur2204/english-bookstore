/*
Dimitar Nizamov

This is the Header component that is used throughout the app
It renders the text prop that is passed to it as a title
It also has customisable buttons that are passed to it as boolean props
*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "./account/AccountMenu";
import { Close } from "@mui/icons-material";
import BackButton from "./global/BackButton";
import theme from "../theme";

export default function Header({
  text,
  withSearch,
  withAccountOptions,
  withXButton,
  withBackButton,
  sx,
}) {
  const navigate = useNavigate();
  const titleArray = text?.split(" ");
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        my: theme.spacing(1),
        alignItems: "center",
        ...sx,
      }}
      as="header"
    >
      {withBackButton ? <BackButton onClick={() => navigate(-1)} /> : null}
      {/* code for header for when it contains a search bar or account menu (the three dots) */}
      <Typography variant="h1" sx={{ marginTop: theme.spacing(1) }}>
        {titleArray?.length === 2 ? <>{titleArray[0]} {' '} <span style={{color: theme.palette.primary.main}}>{titleArray[1]}</span></> : text}
      </Typography>
      {withAccountOptions ? <AccountMenu /> : null}
      {withSearch ? (
        <Link to="/search">
          <IconButton size="large" aria-label="Search">
            <SearchIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Link>
      ) : null}
      {withXButton ? (
        <IconButton
          position="end"
          aria-label="cross"
          onClick={() => navigate(-1)}
        >
          <Close />
        </IconButton>
      ) : null}
    </Container>
  );
}
