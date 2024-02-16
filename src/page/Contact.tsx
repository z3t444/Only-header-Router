import { GetData } from "../utils/Contact/text";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="flex justify-between gap-3">
        <div className="for-left-header gap-2 flex items-center">
          <div className="p-4 rounded-full bg-[#653cd1]"></div>
          <h3 className="font-bold text-4xl">Za.</h3>
        </div>
        <div className="flex items-center text-sm gap-3">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm mt-10">{GetData}</p>
      </div>
    </>
  );
}

export default Contact;
