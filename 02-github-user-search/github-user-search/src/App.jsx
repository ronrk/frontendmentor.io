import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

const App = () => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  const getGithubUserByUsername = async (username) => {
    try {
      const res = await fetch("https://api.github.com/users/Octocat");

      const data = await res.json();
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className={`app app-bg ${dark ? "dark" : null}`}>
      <main className="container">
        <Header onToggleMode={toggleDarkMode} dark={dark} />
        <SearchBar onSearch={getGithubUserByUsername} />
        <Content />
      </main>
    </div>
  );
};

export default App;
