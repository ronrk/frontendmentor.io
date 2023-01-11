import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import avatar from "../images/avatar.jpg";

import Wrapper from "./ChatBox.styled";

const ChatBox = () => {
  return (
    <Wrapper className="bg-white">
      <header className="chat__header flex ">
        <button className="back-btn text-white fs-600">
          <MdOutlineArrowBackIosNew />
        </button>
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="user">
          <h3 className="fs-600 fw-b text-white">Samuel Green</h3>
          <p className="fs-500 text-sub-color fw-m">Available to Walk</p>
        </div>

        <button className="menu-btn">
          <BiDotsVerticalRounded className="menu-icon" />
        </button>
      </header>
      <div className="chat__body bg-gray flex">
        <p className="incoming text-violet-light fs-600">
          That sounds great. I’d be happy with that.
        </p>
        <p className="incoming text-violet-light fs-600">
          Could you send over some pictures of your dog, please?
        </p>
        <p className="outgoing text-violet-dark bg-white"></p>
        <p className="outgoing text-violet-dark bg-white fs-600">
          Here are a few pictures. She’s a happy girl!
        </p>
        <p className="outgoing text-violet-dark bg-white fs-600">
          Can you make it?
        </p>
        <p className="incoming text-violet-light fs-600">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
        <p className="incoming select fs-600">
          30 minute walk <h4 className="fs-700">$29</h4>
        </p>
        <p className="incoming select fs-600">
          1 hour walk <h4 className="fs-700">$49</h4>
        </p>
      </div>
      <div className="chat__input bg-gray flex">
        <input type="text" placeholder="Type a message…" />
        <button className="submit-btn bg-violet">
          <MdOutlineArrowForwardIos className="submit_icon" />
        </button>
      </div>
    </Wrapper>
  );
};

export default ChatBox;
