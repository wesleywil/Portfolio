import {
  FaHome,
  FaLaptopCode,
  FaSmileBeam,
  FaGithub,
  FaBrain,
} from "react-icons/fa";

import SideBarLink from "../sidebar_link/sidebar_link.component";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-slate-200 float-left flex flex-col">
      <div className="m-10 mx-auto text-red-400 font-bold">
        <h1 className="text-6xl ">WW</h1>
        <h1 className="text-center">fullstack</h1>
      </div>
      <SideBarLink Icon={<FaHome />} text={"Home"} toPage={"/"} />
      <SideBarLink Icon={<FaSmileBeam />} text={"About"} toPage={"/about"} />
      <SideBarLink Icon={<FaBrain />} text={"Skills"} toPage={"/skills"} />
      <SideBarLink
        Icon={<FaLaptopCode />}
        text={"Projects"}
        toPage={"/projects"}
      />

      <div className="bg-red-400 p-2 mt-32">
        <a
          href="https://github.com/wesleywil"
          target="_blank"
          className="text-slate-800 hover:text-slate-200 font-bold mx-auto flex flex-col justify-center text-center  text-2xl transition duration-700 ease-in-out"
        >
          <h1 className="p-0 m-0 mx-auto">
            <FaGithub />
          </h1>
          <h1>GitHub</h1>
        </a>
      </div>
      <div className="text-center text-slate-500 font-semibold mt-20">
        <h1>by</h1>
        <h1>wesley wilson</h1>
      </div>
    </div>
  );
};
export default SideBar;
