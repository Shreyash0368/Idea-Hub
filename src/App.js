import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarComp from './components/Navbar';
import MyNotes from './components/MyNotes';
import About from './components/About';
import { NoteProvider } from './context/NoteContext';
import { AlertsProvider } from './context/AlertsContext';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <>
      <NoteProvider>
        <AlertsProvider>
        <Router>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<LandingPage />} />
            <Route path='/mynotes' element={<MyNotes />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
        </AlertsProvider>
      </NoteProvider>

    </>
  );
}

export default App;
