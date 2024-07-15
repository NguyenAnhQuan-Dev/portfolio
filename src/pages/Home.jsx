import DefaultLayout from "../layout/DefaultLayout";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="h-screen w-full pt-24 flex flex-col justify-between items-center gap-6">
        <div className="w-[250px] h-[250px] rounded-[50%] overflow-hidden sm:w-[300px] sm:h-[300px]">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white font-medium text-3xl text-center">
          WELLCOM TO MY PORTFOLIO
        </h1>
        <ul className="list-none flex justify-center items-center gap-4 ">
          <li>
            <a href="#">
              <FaGithub color="white" size={60} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook color="white" size={60} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin color="white" size={60} />
            </a>
          </li>
        </ul>
        <p className="text-white">&copy; Nguyen Anh Quan 2024</p>
      </div>
    </DefaultLayout>
  );
}
