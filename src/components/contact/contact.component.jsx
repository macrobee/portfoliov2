import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";

import { SectionContext } from "../../contexts/currentsectioncontext";
import {
  ContactContainer,
  ConnectText,
  ConnectLinkText,
} from "./contact.styles";
import { LinksContainer } from "../projects/projectlist.styles";

import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ThemeContext } from "../../contexts/themecontext";

const container = {
  hidden: { opacity: 0, y: 100, transition: { when: "afterChildren" } },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforechildren", staggerChildren: 0.3 },
  },
  transition: { ease: "linear", duration: 1 },
};
const child = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const Contact = () => {
  const { updateSection } = useContext(SectionContext);
  const { currentThemeColors } = useContext(ThemeContext);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    updateSection("contact", inView);
  }, [inView]);
  return (
    <ContactContainer
      id="contact-section"
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      viewport={{ once: true }}
      themeColors={currentThemeColors}
    >
      <ConnectText
        themeColors={currentThemeColors}
        as={motion.h2}
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        Let's connect!
      </ConnectText>

      <div className="contact-info">
        <LinksContainer>
          <ConnectLinkText
            themeColors={currentThemeColors}
            href="mailto:vivian.wt.dv@gmail.com"
          >
            {" "}
            <EmailIcon
              width={"25px"}
              height={"25px"}
              fill={currentThemeColors.text}
            />
            vivian.wt.dv@gmail.com
          </ConnectLinkText>
          |
          <ConnectLinkText
            themeColors={currentThemeColors}
            href="https://www.linkedin.com/in/vivian-tong-35726757/"
          >
            <LinkedInIcon
              width={"25px"}
              height={"25px"}
              fill={currentThemeColors.text}
            />
            LinkedIn
          </ConnectLinkText>
          |{" "}
          <ConnectLinkText
            themeColors={currentThemeColors}
            href="https://github.com/macrobee/"
          >
            <GithubIcon
              width={"25px"}
              height={"25px"}
              fill={currentThemeColors.text}
            />
            Github
          </ConnectLinkText>
        </LinksContainer>
      </div>
      <div className="send-message"></div>
    </ContactContainer>
  );
};

export default Contact;
