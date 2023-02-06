import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const FormGroupWrapper = styled.div`
  flex-wrap: wrap;
  margin-bottom: 5rem;
  --gap: 1rem;
`;

const FormGroup: FC<IProps> = ({ children, className }) => {
  return <FormGroupWrapper className={className}>{children}</FormGroupWrapper>;
};

export default FormGroup;
