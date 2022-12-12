/*

This is the bottom navigation of the page that renders on every page
It is made up of the <BottomNavigation /> component from Material UI
*/
import React from "react";
import { Link as RouterLink, useMatch } from "react-router-dom";
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import theme from "../theme";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";
import { Typography } from "@mui/material";

const NavLabel = ({ label }) => (
  <Typography fontSize="0.7rem">{label}</Typography>
);
export default function BottomNavigation() {
  const [value, setValue] = React.useState();
  return (
    // Paper component that works as a background for our nav bar
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {/* nav bar icons and linking them to the pages */}
      <BottomNavigationMUI
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ py: theme.spacing(1) }}
      >
        <BottomNavigationAction
          icon={
            <HomeIcon
              sx={{
                width: "30px",
                height: "30px",
                color: useMatch("/")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          label={<NavLabel label="Home" />}
          component={RouterLink}
          to="/"
        />

        <BottomNavigationAction
          icon={
            <SearchIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("search")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          label={<NavLabel label="Search" />}
          component={RouterLink}
          to="/search"
        />

        <BottomNavigationAction
          icon={
            <AutoFixHighIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("wishlist")?.pattern.end &&
                  theme.palette.primary.main,
              }}
            />
          }
          label={<NavLabel label="Wishlist" />}
          component={RouterLink}
          to="/wishlist"
        />

        <BottomNavigationAction
          icon={
            <LocalLibraryIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("my-books")?.pattern.end &&
                  theme.palette.primary.main,
              }}
            />
          }
          label={<NavLabel label="My books" />}
          component={RouterLink}
          to="/my-books"
        />

        <BottomNavigationAction
          icon={
            <InfoIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("about-us")?.pattern.end &&
                  theme.palette.primary.main,
              }}
            />
          }
          label={<NavLabel label="Info" />}
          component={RouterLink}
          to={"about-us"}
        />
      </BottomNavigationMUI>
    </Paper>
  );
}
