import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

const App = () => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  const getGithubUserByUsername = async (username) => {
    setError({ status: false, message: "" });
    setLoading(true);
    setUser(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.status === 404) {
        throw new Error("Not Found");
      }
      const data = await res.json();

      setUser(data);
      setLoading(false);
    } catch (error) {
      setError({ status: true, message: error.message });
      setLoading(false);
    }
  };

  useEffect(() => {
    getGithubUserByUsername("Octocat");
  }, []);

  return (
    <div className={`app app-bg ${dark ? "dark" : null}`}>
      <main className="container">
        <Header onToggleMode={toggleDarkMode} dark={dark} />
        <SearchBar onSearch={getGithubUserByUsername} error={error} />
        <Content loading={loading} user={user} />
      </main>
    </div>
  );
};

export default App;
