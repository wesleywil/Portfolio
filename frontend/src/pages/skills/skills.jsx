import SkillBar from "../../components/skill_bar/skill_bar.component";
import ContactTip from "../../components/contact_tip/contact_tip.component";

const Skills = () => {
  return (
    <div className="text-center pt-52 mx-auto flex  gap-2">
      <div className="pl-10 w-1/2">
        <h1 className="text-7xl mb-5 mt-1 text-white text-left">
          <span className="text-red-400 font-bold">S</span>kills
        </h1>
        <p className="mb-2 text-white text-xl text-left">
          I create amazing web apps that are fast and easy to use. The main
          technologies used in my apps are Html, CSS, Javascript to Front-end
          and manly Python to Back-end.
        </p>
        <p className="mb-2 text-white text-xl text-left">
          I like to experience with other tech as well, that's why I'm using
          nowadays Tauri an amazing framework to create desktop apps using rust
          as the backend language and reactjs at the Front-end.
        </p>
        <div className="text-left">
          <ContactTip />
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="border-2 border-slate-400 p-2 rounded-xl">
          <SkillBar text={"Front-end"} progress={60} />
          <SkillBar text={"Back-end"} progress={55} />
          <SkillBar text={"Reactjs"} progress={50} />
          <SkillBar text={"Django"} progress={60} />
        </div>
        <h1 className="text-left text-white font-bold text-xl my-2">
          Programming Languages
        </h1>
        <div className="border-2 border-slate-400 p-2 rounded-xl">
          <SkillBar text={"Javascript"} progress={60} />
          <SkillBar text={"Python"} progress={70} />
          <SkillBar text={"Rust"} progress={20} />
          <SkillBar text={"Java"} progress={40} />
          <SkillBar text={"PHP"} progress={30} />
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
