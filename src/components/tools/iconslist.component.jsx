import { IconsListContainer, IconContainer } from "./iconslist.styles";


const IconsList = (props) => {
    return (
      <IconsListContainer>
        {props.list.map((tool) => {
          return (
            <IconContainer key={tool.key}>
              {tool.icon}
              <p className="tool-name">{tool.name}</p>
            </IconContainer>
          );
        })}
      </IconsListContainer>
    );
  };
  
  export default IconsList;
  