/*
Dimitar Nizamov

This is the account menu which shows on top of the account page
It is a dropdown menu that shows the logout button
*/
import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebase-config";
import { toast } from "react-toastify";

const auth = getAuth(firebaseApp);
const options = [
  // three dots icon on the Account page with options to:
  // 1) logout option
  {
    label: "Logout",
    handleClick: (navigate) => {
      toast.success("Logged out successfully");
      return signOut(auth).then(() => navigate("/"));
    },
  }
];
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* three dots icon */}
      <IconButton
        style={{ color: "#000", marginTop: "0.7rem" }}
        // (aria label is the same as an alt tag)
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        size="large"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ width: 32, height: 32 }} />
      </IconButton>
      {/* displaying the options of the "three-dots" icon */}
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              option.handleClick(navigate).then(() => handleClose());
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
