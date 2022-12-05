/*
Dimitar Nizamov

This is the layout component that renders the BottomNavigation component and the children components
It acts like a wrapper for the application.
*/
import { Box } from "@mui/material";
import React from "react";
import BottomNavigation from "./BottomNavigation";

//components that apply to every single page
export default function Layout({ children }) {
  return (
    <>
      <Box mb="57px">{children}</Box>
      <BottomNavigation />
    </>
  );
}
