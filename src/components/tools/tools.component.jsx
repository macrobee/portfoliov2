import IconsList from "./iconslist.component";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as HTMLIcon } from "../../assets/html5.svg";
import { ReactComponent as CSSIcon } from "../../assets/css3.svg";
import { ReactComponent as JSIcon } from "../../assets/javascript.svg";
import { ReactComponent as GitIcon } from "../../assets/git.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as SassIcon } from "../../assets/sass.svg";
import { ReactComponent as ResDesignIcon } from "../../assets/responsivedesign.svg";
import { ReactComponent as SEOIcon } from "../../assets/seo.svg";
import { ReactComponent as StyledComponentsIcon } from "../../assets/styled.svg";
// import { ReactComponent as PythonIcon } from "../../assets/python.svg";
// import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";
// import { ReactComponent as FirebaseIcon } from "../../assets/firebase.svg";

import { motion } from "framer-motion";

import { ToolsContainer } from "./tools.styles.jsx";

const toolsList = [
  { name: "React", icon: <ReactIcon width="45px" height="45px" />, key: 1 },
  { name: "HTML5", icon: <HTMLIcon width="45px" height="45px" />, key: 2 },
  { name: "CSS3", icon: <CSSIcon width="45px" height="45px" />, key: 3 },
  { name: "Javascript", icon: <JSIcon width="45px" height="45px" />, key: 4 },
  { name: "Git", icon: <GitIcon width="45px" height="45px" />, key: 5 },
  { name: "GitHub", icon: <GithubIcon width="45px" height="45px" />, key: 6 },
  { name: "Sass", icon: <SassIcon width="45px" height="45px" />, key: 7 },
  {
    name: "Responsive Design",
    icon: <ResDesignIcon width="45px" height="45px" />,
    key: 8,
  },
  { name: "SEO", icon: <SEOIcon width="45px" height="45px" />, key: 9 },
  {
    name: "Styled Components",
    icon: <StyledComponentsIcon width="45px" height="45px" />,
    key: 10,
  },
  //   { name: "Python", icon: <PythonIcon width="45px" height="45px"/>, key: 11 },
  //   { name: "Redux", icon: <ReduxIcon width="45px" height="45px"/>, key: 12 },
  //   { name: "Firebase", icon: <FirebaseIcon width="45px" height="45px"/>, key: 13 },
];

function Tech() {
  return (
    <ToolsContainer
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
      <div className="wrapper">
        {/* <img src="" alt="image" /> */}
        <h2 className="header">Tools I use</h2>
        <IconsList list={toolsList} />
      </div>
    </ToolsContainer>
  );
}
export default Tech;
