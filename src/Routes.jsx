/*
Dimitar Nizamov

This is the main component that renders the routes
It uses the createRoutes function to create the routes
Protected Route is a component that checks if the user is logged in and redirects if they are not
It also renders certain routes within the App component which is the layout component that renders the BottomNavigation component
*/
import React from "react";
import {
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import App from "./App";
import firebaseApp from "./firebase-config";
import Search from "./pages/Search";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MyBooks from "./pages/MyBooks";

const auth = getAuth(firebaseApp);

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const createRoutes = () =>
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <App>
            <Outlet />
          </App>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/english-bookstore/home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="my-books" element={<MyBooks />} />
        <Route path=":category" element={<Home />} />
      </Route>
      <Route path="landing" element={<Landing />} />
    </>
  );

export default createRoutes;
