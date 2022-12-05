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
import Account from "./pages/Account";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Bids from "./pages/Bids";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import PostDetails from "./pages/PostDetails";
import Landing from "./pages/Landing";
import Category from "./pages/Category";

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
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/artem/home" element={<Navigate to="/home" />} />
        <Route
          path="bids"
          element={
            <ProtectedRoute>
              <Bids />
            </ProtectedRoute>
          }
        />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="saved"
          element={
            <ProtectedRoute>
              <Saved />
            </ProtectedRoute>
          }
        />
        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="search" element={<Search />} />
        <Route path="post/:id" element={<PostDetails />} />
        <Route path=":category" element={<Category />} />
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  );

export default createRoutes;
