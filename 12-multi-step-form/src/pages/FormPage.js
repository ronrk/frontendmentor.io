import React from "react";
import { useParams } from "react-router-dom";
import { YourInfo, SelectPlan, AddOns, Summary } from "../components";
import Wrapper from "./styled/FormPage.styled";

const FormPage = () => {
  const { id } = useParams();
  let formContent;

  if (id === "1") {
    formContent = <YourInfo />;
  }
  if (id === "2") {
    formContent = <SelectPlan />;
  }
  if (id === "3") {
    formContent = <AddOns />;
  }
  if (id === "4") {
    formContent = <Summary />;
  }
  return <Wrapper>{formContent}</Wrapper>;
};

export default FormPage;
