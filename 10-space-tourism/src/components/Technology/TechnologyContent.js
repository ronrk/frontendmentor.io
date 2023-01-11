import React from "react";

const TechnologyContent = ({ technology, className }) => {
  if (!technology) {
    return;
  }
  const { name, description } = technology;

  return (
    <section className={className + " flow"}>
      <header className="flow flow-space--small">
        <h2 className="fs-600 ff-serif uppercase">the terminology</h2>
        <p className="fs-700 uppercase ff-serif">{name}</p>
      </header>
      <p>{description}</p>
    </section>
  );
};

export default TechnologyContent;
