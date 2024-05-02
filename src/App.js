import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../db/mydb.db', sqlite3.OPEN_READWRITE, (err)=> {
  if (err) return console.error(err.message);
});

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
