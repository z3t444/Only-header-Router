import { Link } from "react-router-dom";
import { TextData } from "../utils/Home/text.tsx";

function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="for-left-header gap-2 flex items-center">
          <div className="p-4 rounded-full bg-[#653cd1]"></div>
          <h3 className="font-bold text-4xl">Za.</h3>
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
