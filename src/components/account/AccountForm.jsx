/*
Dimitar Nizamov

This is the account form which doubles as both Login and Register
It has a lot of styling and is very easy to use
It is also very easy to add more functionality to it
It keeps our login form consitent on both pages 
It takes in the type of the form and the onSubmit function
Renders the form and the buttons
*/
import { AccountBox, Google, Lock } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {
  Alert,
  Box,
  Button,
  capitalize,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import firebaseApp from "../../firebase-config";
import theme from "../../theme";
import Header from "../Header";
import Input from "../global/Input";

const auth = getAuth(firebaseApp);

function AccountForm({ type, onSubmit, error, loading }) {
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  return (
    <>
      <Header withBackButton sx={{ paddingLeft: 0, mt: theme.spacing(1) }} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`${process.env.PUBLIC_URL}/A.svg`}
            width={100}
            height={100}
            alt="logo"
            style={{ alignSelf: "center", justifyContent: "center" }}
          />
        </div>
        <Typography
          marginTop="0.8rem"
          align="center"
          variant="h1"
          sx={{ mb: theme.spacing(4), fontSize:"3rem" }}
        >
          {capitalize(type)}
        </Typography>

        <div style={{marginTop:"2rem"}}>
        <form
          onSubmit={(e) => {
            onSubmit(e, { email, password, repeatPassword });
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* boxes for users to log in */}
          <Input 
            endAdornment={ 
              <InputAdornment
                sx={{
                  input: {
                    background: "white",
                  },
                }}
                position="end"
              >
                <AccountBox />
                {/* username box */}
              </InputAdornment>
            }
            sx={{ mb: theme.spacing(2) }}
            placeholder="Email..."
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            endAdornment={
              <InputAdornment position="end">
                <Lock />
                {/* password box */}
              </InputAdornment>
            }
            placeholder="Password..."
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: theme.spacing(2), marginTop:"1rem" }}
          />
          {/* registrering a user */}
          {type === "register" ? (
            <Input
              endAdornment={
                <InputAdornment position="end">
                  <Lock />
                </InputAdornment>
              }
              sx={{ mb: theme.spacing(2) }}
              placeholder="Repeat password..."
              type="password"
              name="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          ) : null}
          {error ? (
            <Alert sx={{ mt: theme.spacing(1) }} severity="error">
              {error.message}
            </Alert>
          ) : null}
          <Button
            sx={{ mt: theme.spacing(2), marginTop:"1rem" }}
            variant="contained"
            size="large"
            type="submit"
            disabled={loading}
            disableElevation
            style={{ width: "60%" }}
          >
            {loading ? <CircularProgress size={14} /> : capitalize(type)}
          </Button>
          <Typography sx={{marginTop:"1rem", fontSize:"15px"}}>Forgot your password?</Typography>

        </form>
        </div>
        {/* if a user does not have an account yet, register option */}
        {/* possibility to log in with google */}

        <div style={{ marginTop: theme.spacing(8) }}>
          <Typography sx={{fontSize:"15px"}}>or connect with </Typography>
            <IconButton
              aria-label="Sign in with Google"
              onClick={() => {
                signInWithGoogle(["email", "profile"]).then(() => navigate("/"));
              }}
            >
              <Google sx={{ width: "45px", height: "45px" }} />
            </IconButton>

            {/* possibility to log in with facebook (currently only links to google login as it is too much hassle to log in with facebook*/}
            <IconButton
              aria-label="Sign in with Facebook"
              onClick={() => {
                signInWithGoogle(["email", "profile"]).then(() => navigate("/"));
              }}
            >
              <FacebookRoundedIcon sx={{ width: "45px", height: "45px" }} />
            </IconButton>
        </div>
        {type === "login" ? (
          <>
            <Typography
              display="inline"
              align="center"
              sx={{ mt: theme.spacing(2), fontSize:"15px" }}
            >
              Don’t have account?{" "}
            </Typography>
            <Typography color="primary" display="inline">
              <Link
                to="/register"
                style={{ color: theme.palette.primary.main, }}
              >
                Register
              </Link>
            </Typography>
          </>
        ) : null}
      </Box>
    </>
  );
}

export default AccountForm;
