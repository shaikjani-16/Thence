import React from "react";
import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className=" w-full bg-white rounded-full  p-6 flex items-center justify-between relative"
      style={{
        borderWidth: "1.13px",
        padding: "26.11px 41.78px",
      }}
    >
      <div>
        <img src={logo} />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/newform">
          <button
            className="bg-white  hover:bg-gray-200 text-black px-4 py-2 rounded-full border-solid border-2 border-gray-300 font-abc font-medium text-lg"
            style={{ borderWidth: "1.13px", padding: "26.11px 41.78px" }}
          >
            Get Projects
          </button>
        </Link>
        <button
          className="bg-black  hover:bg-gray-200 text-white px-4 py-2 rounded-full border-solid border-2 border-gray-300 font-abc font-medium text-lg transi"
          style={{ borderWidth: "1.13px", padding: "26.11px 41.78px" }}
        >
          Onboard Talent
        </button>
      </div>
    </div>
  );
};

export default Navbar;
