/*
Dimitar Nizamov

This is the main component that renders the routes
It uses the createRoutes function to create the routes
Protected Route is a component that checks if the user is logged in and redirects if they are not
It also renders certain routes within the App component which is the layout component that renders the BottomNavigation component
*/
import React from "react";
import { createRoutesFromElements, Outlet, Route } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MyBooks from "./pages/MyBooks";
import BooksByCategory from "./pages/BooksByCategory";

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
        <Route path="/category/:category" element={<BooksByCategory />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
      <Route path="landing" element={<Landing />} />
    </>
  );

export default createRoutes;
