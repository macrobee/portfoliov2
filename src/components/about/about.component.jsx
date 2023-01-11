import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";

import { SectionContext } from "../../contexts/currentsectioncontext";

import {
  AboutSection,
  AboutContent,
  BigName,
  RoundImage,
  FlexDiv,
  StaggeredDiv,
} from "./about.styles";
import { ThemeContext } from "../../contexts/themecontext";

const itemMain = {
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
const grandChild = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1 },
  },
};
const About = () => {
  const { updateSection } = useContext(SectionContext);
  const { currentThemeColors } = useContext(ThemeContext);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    updateSection("about", inView);
  }, [inView]);

  return (
    <AboutSection themeColors={currentThemeColors} id="about-section" ref={ref}>
      <FlexDiv>
        <StaggeredDiv>
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hi,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: true }}
          >
            I'm
          </motion.span>
        </StaggeredDiv>{" "}
        <BigName
          as={motion.span}
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", delay: 1 }}
          viewport={{ once: true }}
          themeColors={currentThemeColors}
        >
          Vivian
        </BigName>
      </FlexDiv>
      <AboutContent
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.5,
        }}
        viewport={{ once: true }}
      >
        <RoundImage src="../../facesquare.png" alt="cartoon of myself" />
        <p>
          I'm a self-taught front-end developer based in Toronto, Canada. My
          background in biology and education has fueled my curiosity for the
          world and given me a drive for learning how things work. I love
          tinkering, solving puzzles, and biking.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
