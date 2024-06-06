import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth
      .signOut()
      .then(() => {
        window.location.reload(); // Reload the page after logout
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.png" alt="LinkedIn Logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption icon={HomeIcon} title="Home" />
        <HeaderOption icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption icon={ChatIcon} title="Chat" />
        <HeaderOption icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="/AVATAR.JPG" title="Me" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
