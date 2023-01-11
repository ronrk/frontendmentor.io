import React from "react";

import Wrapper from "./ContentBox.styled";

const ContentBox = () => {
  return (
    <Wrapper className="content">
      <h1 className="fs-900 fw-m text-violet-dark-2">Simple booking</h1>
      <p className="fs-700 text-gray-dark">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </Wrapper>
  );
};

export default ContentBox;
