import { FaHome, FaLaptopCode, FaSmileBeam, FaGithub } from "react-icons/fa";

import SideBarLink from "../sidebar_link/sidebar_link.component";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-slate-200 float-left flex flex-col">
      <div className="m-10 mx-auto text-red-400 font-bold">
        <h1 className="text-6xl ">WW</h1>
        <h1 className="text-center">fullstack</h1>
      </div>
      <SideBarLink Icon={<FaHome />} text={"Home"} />
      <SideBarLink Icon={<FaSmileBeam />} text={"About"} />
      <SideBarLink Icon={<FaLaptopCode />} text={"Projects"} />

      <div className="bg-red-400 p-2 mt-32">
        <div className="text-slate-800 font-bold mx-auto flex flex-col justify-center text-center  text-2xl">
          <h1 className="p-0 m-0 mx-auto">
            <FaGithub />
          </h1>
          <h1>GitHub</h1>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
