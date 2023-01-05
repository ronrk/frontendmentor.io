import React from "react";
import Wrapper from "../styles/Skills.styled";

const Skills = () => {
  return (
    <Wrapper className="text-center text-white-2 ff-sans flex-c">
      <div className="skill-item">
        <h3 className="fs-300">HTML</h3>
        <p className="fs-100 text-white">4 Years Experience</p>
      </div>

      <div className="skill-item">
        <h3 className="fs-300">CSS</h3>
        <p className="fs-100 text-white">4 Years Experience</p>
      </div>

      <div className="skill-item">
        <h3 className="fs-300">Javascript</h3>
        <p className="fs-100 text-white">4 Years Experience</p>
      </div>

      <div className="skill-item">
        <h3 className="fs-300">Accessibility</h3>
        <p className="fs-100 text-white">4 Years Experience</p>
      </div>
      <div className="skill-item">
        <h3 className="fs-300">React</h3>
        <p className="fs-100 text-white">3 Years Experience</p>
      </div>
      <div className="skill-item">
        <h3 className="fs-300">Sass</h3>
        <p className="fs-100 text-white">3 Years Experience</p>
      </div>
    </Wrapper>
  );
};

export default Skills;
