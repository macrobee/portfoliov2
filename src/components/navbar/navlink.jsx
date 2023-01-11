import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import { SectionContext } from "../../contexts/currentsectioncontext";

import { LinkText } from "../projects/projectlist.styles";

import { ThemeContext } from "../../contexts/themecontext";

const NavLinkText = styled(LinkText)`
  font-size: 1.5rem;
  padding-left: 1rem;
  border-left: 20px solid
    ${(props) =>
      props.status === "active"
        ? props.themeColors.main
        : props.themeColors.text};
  color: ${(props) => props.themeColors.text};
  ${(props) =>
    props.status === "active"
      ? `filter: drop-shadow(0 0 10px ${props.themeColors.main}); font-size: 2rem; @media (max-width: 800px) {font-size: 1rem;}`
      : null}
  :hover {
    transform: scale(1);
  }
  @media (max-width: 800px) {
    border-left: none;
    font-size: 1rem;
  }
`;

const NavLink = ({ text, to }) => {
  const { section } = useContext(SectionContext);
  const { currentThemeColors } = useContext(ThemeContext);
  const [isActiveSection, setIsActiveSection] = useState(false);

  useEffect(() => {
    section === text.toLowerCase()
      ? setIsActiveSection(true)
      : setIsActiveSection(false);
  }, [section]);

  return (
    <NavLinkText
      themeColors={currentThemeColors}
      href={to}
      status={isActiveSection ? "active" : null}
    >
      {text}
    </NavLinkText>
  );
};

export default NavLink;
