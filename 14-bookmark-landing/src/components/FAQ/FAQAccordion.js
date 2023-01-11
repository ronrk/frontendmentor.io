import React, { useState } from "react";
import { FAQList } from "../../utils";
import { ReactComponent as ArrowIcon } from "../../images/icon-arrow.svg";

const FAQAccordion = () => {
  const [expandedIdx, setExpandedIdx] = useState(-1);

  const handleClick = (nextIdx) => {
    setExpandedIdx((prev) => {
      if (prev === nextIdx) return -1;
      return nextIdx;
    });
  };

  const renderedItems = FAQList.map((item, idx) => {
    const isExpanded = idx === expandedIdx;
    const icon = (
      <ArrowIcon className={isExpanded ? "faq-btn expanded" : "faq-btn"} />
    );
    return (
      <div className="faq-box">
        <div className="question flex">
          <h5 className="text-dark fw-l fs-600">{item.question}</h5>
          <button onClick={() => handleClick(idx)}>{icon}</button>
        </div>
        {isExpanded && (
          <div className="answer text-dark fs-500">{item.answer}</div>
        )}
      </div>
    );
  });

  return <div className="faq-accordion flex-c">{renderedItems}</div>;
};

export default FAQAccordion;
