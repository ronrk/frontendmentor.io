import React from "react";

import {
  Header,
  Hero,
  Stats,
  MainSection,
  CTASection,
  Footer,
} from "./Components";

import imgGrow from "./assets/images/illustration-grow-together.svg";
import imgFlowing from "./assets/images/illustration-flowing-conversation.svg";
import imgUsers from "./assets/images/illustration-your-users.svg";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Stats />
      <MainSection
        img={imgGrow}
        title="Grow Together"
        text={`Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form. `}
      />
      <MainSection
        img={imgFlowing}
        title="Flowing Conversations"
        text={`You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
  just-in-time loading for a more natural flow.`}
      />
      <MainSection
        img={imgUsers}
        title="Your Users"
        text={`It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
  once signed in to your app, your users can start chatting immediately.`}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
