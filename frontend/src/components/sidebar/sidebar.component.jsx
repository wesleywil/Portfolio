import {
  FaHome,
  FaLaptopCode,
  FaSmileBeam,
  FaGithub,
  FaBrain,
  FaArrowUp,
} from "react-icons/fa";

import SideBarLink from "../sidebar_link/sidebar_link.component";

import WWlogo from "../../assets/wwlogo.svg";

const SideBar = () => {
  return (
    <div
      className="xl:w-64  xl:h-screen xl:bg-slate-200 float-left flex flex-col"
      id="sidebar"
    >
      <div className="hidden xl:block md:block m-5 mx-auto text-red-400 font-bold">
        <img
          src={WWlogo}
          className="w-12 xl:w-20 mx-auto"
          alt="wesley wilson logo"
        />
        <h1 className="text-center text-xl xl:text-2xl  font-bold">
          fullstack
        </h1>
      </div>
      <SideBarLink Icon={<FaHome />} text={"Home"} toPage={"/"} />
      <SideBarLink Icon={<FaSmileBeam />} text={"About"} toPage={"/about"} />
      <SideBarLink Icon={<FaBrain />} text={"Skills"} toPage={"/skills"} />
      <SideBarLink
        Icon={<FaLaptopCode />}
        text={"Projects"}
        toPage={"/projects"}
      />

      <div className="xl:bg-red-400 p-2 xl:mt-32 mt-10">
        <a
          href="https://github.com/wesleywil"
          target="_blank"
          className="xl:text-slate-800 text-red-400 hover:text-slate-200 font-bold mx-auto flex flex-col justify-center text-center  xl:text-2xl md:text-2xl text-base transition duration-700 ease-in-out"
        >
          <h1 className="p-0 m-0 mx-auto">
            <FaGithub />
          </h1>
          <h1>GitHub</h1>
        </a>
      </div>
      <div className="block xl:hidden lg:hidden md:hidden flex justify-center fixed z-10 left-5 bottom-2">
        <a
          href="#sidebar"
          className="text-red-400 bg-slate-900 rounded-full p-2"
        >
          <FaArrowUp />
        </a>
      </div>
      <div className="text-center hidden xl:block text-slate-500 font-semibold mt-20">
        <h1>by</h1>
        <h1>wesley wilson</h1>
      </div>
    </div>
  );
};
export default SideBar;
