import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex gap-3">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default About;
