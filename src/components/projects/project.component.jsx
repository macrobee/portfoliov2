import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import uniqid from "uniqid";
import { useInView } from "react-intersection-observer";

import { ThemeContext } from "../../contexts/themecontext";
import { SectionContext } from "../../contexts/currentsectioncontext";

import { LinksContainer, LinkText } from "./projectlist.styles";
import { ProjectContainer } from "./project.styles";
import { PreviewImage } from "./previewimage.styles";

const Project = ({ project }) => {
  const { currentThemeColors } = useContext(ThemeContext);

console.log(project);
  return (
    <ProjectContainer
      as={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={{ once: true }}
      key={uniqid()}
      themeColors={currentThemeColors}
    >
      <div className="img-container">
        <a href={project.preview}>
          <PreviewImage
            src={project.source}
            alt={project.imgDescription}
            width="350px"
            themeColors={currentThemeColors}
          />
        </a>
        <LinksContainer className="project-links">
          <LinkText themeColors={currentThemeColors} href={project.preview}>
            Live Preview
          </LinkText>{" "}
          |
          <LinkText themeColors={currentThemeColors} href={project.code}>
            Source Code
          </LinkText>
        </LinksContainer>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>Tags: {project.tags}</p>
      </div>
    </ProjectContainer>
  );
};

export default Project;
