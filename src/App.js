import './App.scss';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Projectdesc from './components/Projects_Desc';
import Game1 from './components/Game1';
import Game2 from './components/Game2';

function App(){

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path="/projects/Projectsdesc/:id" element={<Projectdesc/>} exact />
        <Route path="/projects/game1" element={<Game1/>} exact />
        <Route path="/projects/game2" element={<Game2/>} exact />
      </Route>
    </Routes>
    </>
  );
}

export default App


