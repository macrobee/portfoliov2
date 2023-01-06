import { ToolsContainer } from "./tools.styles.jsx";


const IconsList = (props) => {
    return (
      <ToolsContainer className="icon-list">
        {props.list.map((tool) => {
          return (
            <div className="icon-container" key={tool.key}>
              {tool.icon}
              <p className="tool-name">{tool.name}</p>
            </div>
          );
        })}
      </ToolsContainer>
    );
  };
  
  export default IconsList;
  