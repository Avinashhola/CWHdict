
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import AboutUtensi from './components/AboutUtensi';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState("light")
  const [alerty, setAlerty] = useState(null)


  const showAlert = (message, type) => {
    setAlerty(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlerty(null);
    }, 1500);
  }





  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode is Enabled", "success")
      document.title = "UTENSILS---LIGHTMODE"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
      showAlert(" Dark mode is Enabled", "success")
      document.title = "UTENSILS---DARKMODE"
    }

  }




  return (
    <>
      <Router>
        <Navbar About="about utensils" mode={mode} toggl={toggleMode} />
        <Alert alert={alerty} />
        <Routes>
          <Route exact path="/Home" element={<Textform mode={mode} showAlertsy={showAlert} />} />
          <Route exact path="/About" element={<AboutUtensi mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

