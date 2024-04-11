import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import Student from "./components/Student";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React router </h1>
      {/* <Navbar /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />}>
          <Route path=":id" element={<Student />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
