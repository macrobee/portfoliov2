
import Navigation from './components/navbar/navbar';
import MovingBackgroundColors from './background/movingbackgroundcolors';
import About from './components/about/about.component';

import './App.scss';
import Tech from './components/tools/tools.component';
import Projects from './components/projects/projects.component';



function App() {
  return (
    <div className="App">
<Navigation />
<About/>
<Tech />
<Projects />
      {/* <MovingBackgroundColors/> */}
    </div>
  );
}

export default App;
