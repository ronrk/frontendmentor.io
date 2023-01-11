import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Hero,
  APIForm,
  APIResults,
  AdvancedSection,
  GetStarted,
  Footer,
} from "./components";

const getFromLocaleStorage = () => {
  return JSON.parse(localStorage.getItem("urlShortening")) || [];
};

const App = () => {
  const [urlResults, setUrlResults] = useState(getFromLocaleStorage());

  const saveOnLocaleStorage = () => {
    localStorage.setItem("urlShortening", JSON.stringify(urlResults));
  };

  useEffect(() => {
    saveOnLocaleStorage();
  }, [urlResults]);

  const urlShortening = async (queryUrl) => {
    try {
      const { data } = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${queryUrl}`
      );
      setUrlResults((prev) => [
        ...prev,
        { value: queryUrl, short: data.result.full_short_link },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app bg-light">
      <Navbar />
      <Hero />
      <APIForm onSubmit={urlShortening} />
      <APIResults links={urlResults} />
      <AdvancedSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
