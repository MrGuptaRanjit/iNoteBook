
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {

  return (
    <>
    <NoteState>
      <div className="container-fluid">
    <Router>
        <Navbar />
        <Alert message="Hello" />
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
        <Route path='/about' element={<About />} />
        </Routes>
    </Router>
    </div>
    </NoteState>
    </>
  )
}

export default App
