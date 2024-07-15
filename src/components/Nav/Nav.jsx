import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav-wrapper fixed top-0 left-0 right-0">
      <div className="w-full bg-black h-16 flex justify-center items-center gap-6">
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
