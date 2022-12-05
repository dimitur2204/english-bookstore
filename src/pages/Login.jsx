/*
Dimitar Nizamov, Dumitrita Poiata and Katerina Kolarova

This is the page that renders when you access /login
It renders the <AccountForm /> component and passes it the type prop with the value "login"
*/
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { Container } from "@mui/material";
import firebaseApp from "../firebase-config";
import AccountForm from "../components/account/AccountForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";

// login process
const auth = getAuth(firebaseApp);
function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleSubmit = (e, { email, password }) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate("/");
      toast.success("Logged in successfully");
    }
  });
  // handling login action
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm
        type="login"
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Login;
