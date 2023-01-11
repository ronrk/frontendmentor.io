import React from "react";
import Button from "../UI/Button";

const DownloadBox = ({ title, sub, icon }) => {
  return (
    <div className="download-box ">
      {icon}
      <h4 className="text-dark fs-600 fw-l">{title}</h4>
      <p className="text-light fs-400">{sub}</p>
      <hr />
      <Button className="filled blue">Add & Install Extension</Button>
    </div>
  );
};

export default DownloadBox;
