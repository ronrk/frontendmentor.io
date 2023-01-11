import React, { useState } from "react";
import Wrapper from "./TetimonialContainer.styled";
import anishAvatar from "../../images/avatar-anisha.png";
import aliAvatar from "../../images/avatar-ali.png";
import richardAvatar from "../../images/avatar-richard.png";
import shanaiAvatar from "../../images/avatar-shanai.png";
import TestimonialArticle from "./TestimonialArticle";

const testimonials = [
  {
    avatar: anishAvatar,
    name: "Anisha Li",
    text: `“Manage has supercharged our team's workflow. The ability to maintain 
visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    avatar: aliAvatar,
    name: "Ali Bravo",
    text: `“We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”`,
  },
  {
    avatar: richardAvatar,
    name: "Richard Watts",
    text: `“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    avatar: shanaiAvatar,
    name: "Shanai Gough",
    text: `“Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

const TestimonialsContainer = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  let activeTestimonial = testimonials[activeIdx];

  const handleTestimonialSelect = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <Wrapper>
      <h2 className="text-blue fs-2 fw-b text-center pi-05">
        What they’ve said
      </h2>
      <div className="container">
        <TestimonialArticle {...activeTestimonial} id={activeIdx} />
      </div>
      <div className="slider">
        {testimonials.map((item, idx) => (
          <button
            onClick={() => {
              handleTestimonialSelect(idx);
            }}
            key={idx}
            className={
              idx === activeIdx ? "btn slider-btn active" : "btn slider-btn"
            }
          ></button>
        ))}
      </div>
      <button className="btn red-btn bg-red rounded pi-3 pm-1 text-light fw-m">
        Get Started
      </button>
    </Wrapper>
  );
};

export default TestimonialsContainer;
