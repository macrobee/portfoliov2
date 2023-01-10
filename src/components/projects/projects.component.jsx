import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";

import { SectionContext } from "../../contexts/currentsectioncontext";
import ProjectList from "./projectlist.component";
import { ProjectsSectionContainer } from "./projectlist.styles";

const projectInfo = [
  {
    source: "../../../screenshots/nutrition.png",
    imgDescription: "Preview of Nutrition Tracker",
    title: "Am I eating enough? Weekly Nutrition Tracker",
    description: `A nutrition tracker for monitoring macro and micronutrient intake, and comparing calories burned during exercise with the calories taken in through food. Designed to help athletes determine their caloric needs. Uses the Nivo visualization library to display nutritional intake in a graph.`,
    tags: "React, Hooks, SASS, REST API, Nutritionix, Nivo",
    preview: "https://macrobeenutrition.netlify.app/",
    code: "https://github.com/macrobee/nutrition",
  },
  {
    source: "../../../screenshots/todolist.png",
    imgDescription: "Preview of Todo List",
    title: "Todo List",
    description: `Task organizer that splits to-dos into short, medium, and long-term
goals and highlights the tasks with the closest deadlines. Task information is saved on local storage.`,
    tags: "React, CSS, Local Storage, Class Components",
    preview: `https://macrobeetaskplanner.netlify.app/`,
    code: `https://github.com/macrobee/taskplanner`,
  },
  {
    source: "../../../screenshots/weather.png",
    imgDescription: "Preview of Weather App",
    title: "Should I bike? Weather app",
    description: `A weather forecast targeted towards cyclists. Displays current and daily weather forecast and reports predicted cycling conditions.`,
    tags: "React, CSS, Hooks, API, OpenWeatherMap, Framer Motion",
    preview: "https://macrobeeweather.netlify.app/",
    code: "https://github.com/macrobee/weather",
  },

  {
    source: "../../screenshots/coming.png",
    imgDescription: "Preview of Strava Dashboard",
    title: "Strava Dashboard (In Progress)",
    description:
      "Strava activity summary app that connects to users' Strava account and returns a shareable summary of individual/weekly activities",
    tags: "React, Hooks, SASS, REST API, Strava",
    preview: "https://github.com/macrobee/",
    code: "https://github.com/macrobee/",
  },
];

const Projects = () => {
  const { updateSection } = useContext(SectionContext);
  const { ref, inView } = useInView({ threshold: 0.1 });
   
  useEffect(() => {
    updateSection('projects', inView);
  }, [inView]);
  
  return (
    <ProjectsSectionContainer ref={ref} id="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        My recent projects
      </motion.h2>

      <ProjectList list={projectInfo} />
    </ProjectsSectionContainer>
  );
};
export default Projects;
