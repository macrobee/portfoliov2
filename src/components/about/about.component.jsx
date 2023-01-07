import { motion } from "framer-motion";
import { AboutSection } from "./about.styles";

const About = () => {
  return (
    <AboutSection
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
      viewport={{ once: true }}
      className="page-contents"
    >
      <h1>
        Hi, I'm <span className="my-name">Vivian</span>
      </h1>
      <div className="profile-info">
        <img src="../../facesquare.png" alt="cartoon of myself" width="200px" />
        <p>
          I'm a self-taught front-end developer based in Toronto, Canada. My
          background in biology and education has fueled my curiosity for the
          world and given me a drive for learning how things work. I love
          building, solving puzzles, and biking.
        </p>
      </div>
    </AboutSection>
  );
};

export default About;
