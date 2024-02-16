import { Link } from "react-router-dom";
import { GetData } from "../utils/Blog/text";

function Blog() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="for-left-header gap-2 flex items-center">
          <div className="p-4 rounded-full bg-[#653cd1]"></div>
          <h3 className="font-bold text-4xl">Za.</h3>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <div className="text-sm flex justify-center mt-10">
        <p>{GetData}</p>
      </div>
    </>
  );
}

export default Blog;
