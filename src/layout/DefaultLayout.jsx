import useResize from "../hooks/useResize.js";
import Nav from "../components/Nav/Nav";
import NavMobile from "../components/Nav/NavMobile";

export default function DefaultLayout({ children }) {
  const size = useResize();
  return (
    <div>
      {size.width < 600 ? <NavMobile /> : <Nav />}
      <div className=" bg-black px-2 w-full h-max">
        <div>{children}</div>
      </div>
    </div>
  );
}
