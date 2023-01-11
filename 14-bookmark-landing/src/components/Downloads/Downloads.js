import React from "react";
import Wrapper from "./Downloads.styled";
import DownloadBox from "./DownloadBox";
import { downloadList } from "../../utils";

const Downloads = () => {
  return (
    <Wrapper className="text-center">
      <h2 className="text-dark fs-800">Download the extension</h2>
      <p className="text-light fs-600">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="flex-c">
        {downloadList.map((item, idx) => (
          <DownloadBox key={item.title + idx} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Downloads;
