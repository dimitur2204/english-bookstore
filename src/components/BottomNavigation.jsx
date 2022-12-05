/*
Dimitar Nizamov

This is the bottom navigation of the page that renders on every page
It is made up of the <BottomNavigation /> component from Material UI
*/
import React from "react";
import { Link as RouterLink, useMatch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BalanceIcon from "@mui/icons-material/Balance";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";
import { AutoAwesomeMotion } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import theme from "../theme";

const auth = getAuth(firebaseApp);

export default function BottomNavigation() {
  const [value, setValue] = React.useState();
  const [user] = useAuthState(auth);
  return (
    // Paper component that works as a background for our nav bar
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {/* nav bar icons and linking them to the pages */}
      <BottomNavigationMUI
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{py: theme.spacing(1)}}
      >
        <BottomNavigationAction
          icon={
            <AccountBalanceIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("home")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          component={RouterLink}
          to="/"
        />

        <BottomNavigationAction
          icon={
            <BalanceIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("bids")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          component={RouterLink}
          to="/bids"
        />

        <BottomNavigationAction
          icon={
            <AddCircleOutlined
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("create")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          component={RouterLink}
          to="/create"
        />

        <BottomNavigationAction
          icon={
            <AutoAwesomeMotion
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("saved")?.pattern.end && theme.palette.primary.main,
              }}
            />
          }
          component={RouterLink}
          to="/saved"
        />

        <BottomNavigationAction
          icon={
            <AccountCircleIcon
              sx={{
                width: "30px",
                height: "30px",
                color:
                  useMatch("/account")?.pattern.end &&
                  theme.palette.primary.main,
              }}
            />
          }
          component={RouterLink}
          to={user ? "/account" : "/login"}
        />
      </BottomNavigationMUI>
    </Paper>
  );
}
