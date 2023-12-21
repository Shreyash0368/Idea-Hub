import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarComp from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { NoteProvider } from './NoteContext';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <NoteProvider>
        <Router>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </NoteProvider>

    </>
  );
}

export default App;
