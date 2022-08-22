import { FaReact, FaPython, FaRust, FaJava, FaPhp } from "react-icons/fa";
import { SiDjango, SiJavascript } from "react-icons/si";

import SkillBar from "../../components/skill_bar/skill_bar.component";
import ContactTip from "../../components/contact_tip/contact_tip.component";

const Skills = () => {
  return (
    <div className="text-center pt-10 xl:pt-52 mx-auto flex flex-col xl:flex-row gap-2 justify-center ">
      <h1 className="block xl:hidden md:hidden text-7xl mb-5 mt-1 text-white text-center">
        <span className="text-red-400 font-bold">S</span>kills
      </h1>
      <div className="hidden xl:block md:block pl-10 w-1/2 xl:w-1/2 md:w-full md:p-2">
        <h1 className="text-7xl mb-5 mt-1 text-white text-left md:text-center">
          <span className="text-red-400 font-bold">S</span>kills
        </h1>
        <p className="mb-2 text-white text-xl xl:py-2  md:text-center xl:text-left">
          I create amazing web apps that are fast and easy to use. The main
          technologies used in my apps are Html, CSS, Javascript to Front-end
          and manly Python to Back-end.
        </p>
        <p className="mb-2 text-white text-xl xl:py-2 xl:text-left md:text-center">
          I like to experience with other tech as well, that's why I'm using
          nowadays Tauri an amazing framework to create desktop apps using rust
          as the backend language and reactjs at the Front-end.
        </p>
        <div className="xl:text-left md:text-center">
          <ContactTip />
        </div>
      </div>
      <div className="xl:w-1/2 p-2">
        <div className="border-2 border-slate-400 p-2 rounded-xl">
          <SkillBar text={"Front-end"} progress={60} />
          <SkillBar text={"Back-end"} progress={55} />
          <SkillBar text={<FaReact />} progress={50} text2={"Reactjs"} />
          <SkillBar text={<SiDjango />} progress={60} text2={"Django"} />
        </div>
        <h1 className="text-left text-white font-bold text-xl my-2">
          Programming Languages
        </h1>
        <div className="border-2 border-slate-400 p-2 rounded-xl">
          <SkillBar
            text={<SiJavascript />}
            progress={60}
            text2={"Javascript"}
          />
          <SkillBar text={<FaPython />} progress={70} text2={"Python"} />
          <SkillBar text={<FaRust />} progress={20} text2={"Rust"} />
          <SkillBar text={<FaJava />} progress={40} text2={"Java"} />
          <SkillBar text={<FaPhp />} progress={30} text2={"PHP"} />
          <SkillBar text={"Pascal"} progress={20} />
        </div>
        <h1 className="text-left text-white font-bold text-xl my-2">
          Data Base
        </h1>
        <div className="border-2 border-slate-400 p-2 rounded-xl">
          <SkillBar text={"SQL"} progress={80} />
          <SkillBar text={"No-SQL"} progress={60} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
