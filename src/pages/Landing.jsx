/*
Dumitrita Poiata

This is the page that renders when you are redirected /landing
Only shows the first time the user logs in
*/
import theme from "../theme";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${process.env.PUBLIC_URL}/background-welcome.png)`,
        position: "relative",
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          gap: "25px",
          paddingTop: "50%",
        }}
      >
        <img alt="logo" style={{width:"80%"}} src={`${process.env.PUBLIC_URL}/logo.webp`}></img>
        <Typography variant="h2" style={{ color: "white", fontSize: "2.7rem" }}>
          Welcome!
        </Typography>
        <Typography style={{ textAlign: "center", color: "white" }}>
        Are you a book enthusiast? What about puzzles? Do you also care about sustainable shopping? Then you've come to the right place!
        </Typography>
        <Button
          variant="outlined"
          disableElevation
          onClick={navigateHome}
          style={{
            width: "200px",
            backgroundColor: theme.palette.background.landing,
            marginTop: "25px",
            color: "white",
          }}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
