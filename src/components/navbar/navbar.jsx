import { NavBar } from "./navbar.styles";

import NavLink from "./navlink";

import './linkhighlights.scss';

const linkDestinations = [
  { text: "About", to: "#about-section" },
  { text: "Tech", to: "#tech-section" },
  { text: "Projects", to: "#projects-section" },
  { text: "Contact", to: "#contact-section" },
];

const Navigation = () => {
  return (
    <NavBar>
      {linkDestinations.map((link) => {
        return <NavLink text={link.text} to={link.to}/>;
      })}
    </NavBar>
  );
};

export default Navigation;
