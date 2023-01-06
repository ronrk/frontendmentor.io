import styled from "styled-components";

const ProjectsWrapper = styled.section`
  padding-inline: 0.1em;
  margin-inline: auto;
  position: relative;
  & .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }

  & .projects-header {
    align-items: center;
    justify-content: space-between;
  }

  margin-bottom: 2rem;
`;

export default ProjectsWrapper;
