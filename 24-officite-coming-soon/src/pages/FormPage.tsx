import { FC } from "react";
import Details from "../components/Details/Details";
import Form from "../components/Form/Form";
import Timer from "../components/Timer/Timer";

interface IProps {
  targetTime: number;
}

const FormPage: FC<IProps> = ({ targetTime }) => {
  return (
    <div className="form-page">
      <div className="container">
        <Details />
        <Timer countdownTimerstampMs={targetTime} theme="dark" />
      </div>

      <Form />
    </div>
  );
};

export default FormPage;
