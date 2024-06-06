import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice"; // Import the login action creator

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      setAlertMessage("Please enter a full name");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        return userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            // Moved this inside the .then() block
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src="newicon.jpg" alt="linkedin icon" />

      {alertMessage && <Alert severity="warning">{alertMessage}</Alert>}

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name required while registering"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
      </form>

      <p>Not a member?</p>
      <span className="login_register" onClick={register}>
        Register now
      </span>
    </div>
  );
}

export default Login;
