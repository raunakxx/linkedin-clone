import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import { selectUser, login, logout } from "./features/userSlice"; // Adjusted import path
import { auth } from "./firebase";
import Widgets from "./Widgets";

// Use createSvgIcon here in your component

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); // Added dispatch
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName, // Corrected property name
            photoUrl: userAuth.photoURL, // Corrected property name
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]); // Added dispatch to dependency array

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
