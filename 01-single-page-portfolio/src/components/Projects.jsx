import React from "react";
import img1 from "../assets/images/thumbnail-project-1-large.webp";
import img2 from "../assets/images/thumbnail-project-2-large.webp";
import img3 from "../assets/images/thumbnail-project-3-large.webp";
import img4 from "../assets/images/thumbnail-project-4-large.webp";
import img5 from "../assets/images/thumbnail-project-5-large.webp";
import img6 from "../assets/images/thumbnail-project-6-large.webp";
import Wrapper from "../styles/Projects.styled";
import ProjectWrapper from "../styles/ProjectBox.styled";

const Projects = () => {
  return (
    <Wrapper className="container">
      <header className="projects-header flex">
        <h3 className="fs-400 text-white-2 ff-sans">Projects</h3>
        <a href="#contact" className="link uppercase">
          contact me
        </a>
      </header>
      <div className="projects">
        <ProjectWrapper className="project-box flex-c">
          <img src={img1} alt="project 1" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">
            design portfilio
          </h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper className="project-box flex-c">
          <img src={img2} alt="project 2" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">
            E-LEARNING LANDING PAGE
          </h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper className="project-box flex-c">
          <img src={img3} alt="project 3" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">
            TODO WEB APP
          </h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper className="project-box flex-c">
          <img src={img4} alt="project 4" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">
            ENTERTAINMENT WEB APP
          </h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper className="project-box flex-c">
          <img src={img5} alt="project 5" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">MEMORY GAME</h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper className="project-box flex-c">
          <img src={img6} alt="project 6" />
          <h5 className="uppercase text-white-2 fs-200 ff-sans">
            ART GALLERY SHOWCASE
          </h5>
          <div className="tech flex uppercase text-white fs-100">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <div className="actions flex">
            <a href="/" className="link uppercase">
              view project
            </a>
            <a href="/" className="link uppercase">
              view code
            </a>
          </div>
        </ProjectWrapper>
      </div>
    </Wrapper>
  );
};

export default Projects;
