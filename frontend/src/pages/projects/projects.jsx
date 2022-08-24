import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectCard from "../../components/project_card/project_card.component";

import {
  personalProjects,
  notPersonalProjects,
} from "../../redux/projects/projectsSlice";

const Projects = () => {
  const personal = useSelector(personalProjects);
  const others = useSelector(notPersonalProjects);

  useEffect(() => {
    console.log("Projects => ", personal + " Others ", others);
  }, [personal, others]);

  return (
    <div className="text-center xl:pt-52 pt-10 mx-auto flex flex-col xl:flex-row gap-2">
      <div className="xl:pl-10 xl:w-1/2">
        <h1 className="xl:text-7xl md:text-7xl text-5xl mb-5 mt-1 text-white xl:text-left">
          <span className="text-red-400 font-bold">P</span>rojects
        </h1>
        <h2 className="xl:text-2xl md:text-2xl text-xl mb-5 mt-2  text-white xl:text-left">
          <span className="text-red-400 font-bold">P</span>ersonal
        </h2>
        <div className="m-2 rounded-xl flex flex-wrap h-96  xl:h-auto md:h-auto overflow-y-auto xl:overflow-hidden  gap-2 justify-center p-4">
          {personal.length ? (
            personal.map((item) => <ProjectCard key={item.id} item={item} />)
          ) : (
            <h1>NO PERSONAL PROJECTS</h1>
          )}
        </div>
      </div>
      <div className="xl:w-1/2 xl:p-2">
        <div className="xl:block hidden mb-20 pt-2"></div>
        <h2 className="xl:text-2xl md:text-2xl text-xl mb-5 mt-2  text-white xl:text-left">
          <span className="text-red-400 font-bold">O</span>thers
        </h2>
        <div className="m-2 rounded-xl flex flex-wrap gap-2 justify-center h-96 xl:h-auto md:h-auto overflow-y-auto xl:overflow-hidden   p-4">
          {others.length ? (
            others.map((item) => <ProjectCard key={item.id} item={item} />)
          ) : (
            <h1>NO PROJECTS</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
