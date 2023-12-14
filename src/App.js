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
function App() {
  return (
    <>
      <NoteProvider>
        <Router>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteProvider>

    </>
  );
}

export default App;
