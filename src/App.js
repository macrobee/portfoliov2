import {useContext} from 'react';

import { ThemeContext } from './contexts/themecontext';

import Navigation from "./components/navbar/navbar";
import About from "./components/about/about.component";
import Tech from "./components/tools/tools.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import ThemeButton from "./components/themebutton/themebutton.component";

import { AppContainer } from './App.styles';

function App() {
  const {currentThemeColors} = useContext(ThemeContext);
  return (
    <AppContainer themeColors={currentThemeColors}>
      <ThemeButton />
      <Navigation />
      <About />
      <Tech />
      <Projects />
      <Contact />
      {/* <MovingBackgroundColors/> */}
    </AppContainer>
  );
}

export default App;
