import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
  localStorage.removeItem("token"); // ✅ clear token on every reload
}, []);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <NoteState>
        <div className="container-fluid">
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route path="/"element={ <Home showAlert={showAlert} />}/> 
              <Route path="/about"element={ <About showAlert={showAlert} />}/> 
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
