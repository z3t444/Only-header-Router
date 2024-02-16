import { Link } from "react-router-dom";
import { DeskText } from "../utils/About/text";

function About() {
  return (
    <>
      <div className="flex gap-3 items-center justify-between">
        <div className="for-left-header gap-2 flex items-center">
          <div className="p-4 rounded-full bg-[#653cd1]"></div>
          <h3 className="font-bold text-4xl">Za.</h3>
        </div>
        <div className="flex gap-3 text-sm items-center">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex justify-center text-sm mt-10">
        <p>{DeskText}</p>
      </div>
    </>
  );
}

export default About;
