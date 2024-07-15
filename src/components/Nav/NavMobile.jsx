import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavMobile() {
  const [isClose, setIsClose] = useState(true);
  return (
    <div className="navmobile-wrapper fixed top-0 left-0 right-0 z-10">
      <div className="bg-black h-16">
        <button
          className="h-14 w-14 border-none outline-none p-3"
          onClick={() => setIsClose((prev) => !prev)}
        >
          <FaBars size={30} className="font-bold text-white_055" />
        </button>
      </div>
      <div
        className="bg-black flex flex-col items-center"
        style={
          isClose
            ? { display: "none", transition: "all 1s ease-in-out" }
            : {
                display: "flex",
                height: "max-content",
                transition: "all 1s ease-in-out",
              }
        }
      >
        <NavLink
          to="/"
          className={(state) => (state.isActive ? "active" : "nav-styles")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(state) => (state.isActive ? "active" : "nav-styles")}
        >
          About
        </NavLink>
        <NavLink
          to="/experiences"
          className={(state) => (state.isActive ? "active" : "nav-styles")}
        >
          Experiences
        </NavLink>
        <NavLink
          to="/project"
          className={(state) => (state.isActive ? "active" : "nav-styles")}
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
}
