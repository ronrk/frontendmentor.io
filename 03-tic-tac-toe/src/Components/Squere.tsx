import { FC } from "react";
import "../index.css";

interface IProps {
  value: string;
  chooseSquere: (squere: number) => void;
}

const Squere: FC<IProps> = ({ value, chooseSquere }) => {
  return (
    <div onClick={chooseSquere} className="squere">
      {value}
    </div>
  );
};

export default Squere;
