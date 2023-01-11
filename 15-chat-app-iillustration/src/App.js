import React from "react";
import ChatBox from "./components/ChatBox";
import ContentBox from "./components/ContentBox";

const App = () => {
  return (
    <div className="app bg-gray">
      <div className="bg"></div>
      <ChatBox />
      <ContentBox />
    </div>
  );
};

export default App;
