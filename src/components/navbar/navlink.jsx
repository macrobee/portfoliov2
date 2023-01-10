import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import { SectionContext } from "../../contexts/currentsectioncontext";

import { LinkText } from "../projects/projectlist.styles";

import { themeColors } from "../../colors/colors";

const NavLinkText = styled(LinkText)`
  font-size: 1.5rem;
  padding-left: 1rem;
  ${(props) =>
    props.status === "active"
      ? `filter: drop-shadow(0 0 10px ${themeColors.main}); transform: scale(1.1);`
      : null}
`;

const NavLink = ({ text, to }) => {
  const { section } = useContext(SectionContext);
  const [isActiveSection, setIsActiveSection] = useState(false);
  
  useEffect(() => {
    console.log("hello" + text.toLowerCase() + " " + section);
    section === text.toLowerCase()
      ? setIsActiveSection(true)
      : setIsActiveSection(false);
  }, [section]);

  return (
    <NavLinkText href={to} status={isActiveSection ? "active" : null}>
      {text}
    </NavLinkText>
  );
};

export default NavLink;
