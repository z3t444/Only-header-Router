import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Blog from "../page/Blog";

function RouterApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/blog" Component={Blog} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
