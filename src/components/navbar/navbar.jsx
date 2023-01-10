import { motion } from "framer-motion";
import uniqid from "uniqid";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/themecontext";

import { NavBar } from "./navbar.styles";

import NavLink from "./navlink";

import "./linkhighlights.scss";

const linkDestinations = [
  { text: "About", to: "#about-section" },
  { text: "Tech", to: "#tech-section" },
  { text: "Projects", to: "#projects-section" },
  { text: "Contact", to: "#contact-section" },
];

const Navigation = () => {
  const { currentThemeColors } = useContext(ThemeContext);
  return (
    <NavBar
      as={motion.div}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      themeColors={currentThemeColors}
    >
      {linkDestinations.map((link) => {
        return <NavLink text={link.text} to={link.to} key={uniqid()} />;
      })}
    </NavBar>
  );
};

export default Navigation;
