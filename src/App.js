import './App.css';
import {Home} from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Contact} from "./pages/Contact";
import {Projects} from "./pages/Projects";
import {WorkExp} from "./pages/WorkExp";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/about" element={ <About/> } />
                  <Route path="/blogs" element={ <Blog/> } />
                  <Route path="/contact" element={ <Contact/> } />
                  <Route path="/projects" element={ <Projects/> } />
                  <Route path="/workexperience" element={ <WorkExp/> } />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
