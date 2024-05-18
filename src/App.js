import './App.scss';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Projectdesc from './components/Projects_Desc';

function App(){

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path="/projects/Projectsdesc/:id" element={<Projectdesc/>} exact />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App


