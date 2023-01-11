import React, { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import { MainSteps, MobileMainSteps } from "../components";
import FormPage from "./FormPage";

import Wrapper from "./styled/Layout.styled";
import { useFormStepContext } from "../context/stepForm-context";

const Dashboard = () => {
  const { page } = useFormStepContext();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/" + page);
  }, [page]);
  return (
    <Wrapper>
      <MainSteps />
      <MobileMainSteps />
      <Routes>
        <Route path="/:id" element={<FormPage />} />
      </Routes>
    </Wrapper>
  );
};

export default Dashboard;
