import Home from "./components/Home/Home"
import About from "./components/About/About"
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import NavigationBar from "./components/NavigationBar";
// import Test from "./components/Home/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
    <NavigationBar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>   
    </>
     
  );
}

export default App;
