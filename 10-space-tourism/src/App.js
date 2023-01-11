import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, DestinationPage, CrewPage, TechnologyPage } from "./pages";
import { Layout } from "./components";
import DesignSystem from "./pages/DesignSystem";

import data from "./data.json";

const App = () => {
  const { destinations, crew, technology } = data;
  return (
    <Routes>
      <Route path="/design" element={<DesignSystem />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/destination"
          element={<DestinationPage destinations={destinations} />}
        />

        <Route path="/crew" element={<CrewPage crew={crew} />} />
        <Route
          path="/technology"
          element={<TechnologyPage technology={technology} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
