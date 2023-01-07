import { ProjectListContainer } from "./projectlist.styles";
import { ProjectContainer } from "./project.styles";
import { PreviewImage } from "./previewimage.styles";

const ProjectList = (props) => {
    return (
      <ProjectListContainer className="project-list-container">
        {props.list.map((project) => {
          return (
            <ProjectContainer className="project-container">
              <div className="img-container">
                <PreviewImage
                  src={project.source}
                  alt={project.imgDescription}
                  width="350px"
                />
                <div className="project-links">
                  <a href={project.preview}>Live Preview</a>
                  <a href={project.code}>Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Tags: {project.tags}</p>
                
              </div>
            </ProjectContainer>
          );
        })}
      </ProjectListContainer>
    );
  };
  export default ProjectList;
  