import React from "react";
import logo from "./assets/logo.svg";
import Wrapper from "./styles/App.styled";
import SpotifyIcon from "./assets/SpotifyIcon";
import ApplePodIcon from "./assets/ApplePod";
import GooglePodIcon from "./assets/GooglePod";
import PockecPodIcon from "./assets/PocketIcon";

const App = () => {
  return (
    <Wrapper>
      <div className="bg"></div>

      <img src={logo} alt="logo" className="logo" />
      <div className="content">
        <h1 className="title">
          Publish your podcasts
          <span>everywhere</span>
        </h1>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
        <div className="social-icons">
          <SpotifyIcon />
          <ApplePodIcon />
          <GooglePodIcon />
          <PockecPodIcon />
        </div>
        <form className="form">
          <input type="email" placeholder="Email address" />
          <button>Request access</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default App;
