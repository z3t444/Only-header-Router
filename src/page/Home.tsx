import { Link } from "react-router-dom";
import { TextData } from "../utils/Home/text.tsx";

function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="left-header-content">
          <h3 className="font-bold uppercase">Zeeta</h3>
        </div>
        <div className="flex text-sm gap-3">
          <h1>Home</h1>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="section-content flex justify-center">
        <p className="for-get-data-text text-sm mt-10">{TextData}</p>
      </div>
    </>
  );
}

export default Home;
