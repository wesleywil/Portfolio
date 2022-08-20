import ProjectCard from "../../components/project_card/project_card.component";

const Projects = () => {
  return (
    <div className="text-center pt-52 mx-auto flex gap-2">
      <div className="pl-10 w-1/2">
        <h1 className="text-7xl mb-5 mt-1 text-white text-left">
          <span className="text-red-400 font-bold">P</span>rojects
        </h1>
        <h2 className="text-2xl mb-5 mt-2  text-white text-left">
          <span className="text-red-400 font-bold">P</span>ersonal
        </h2>
        <div className="m-2 rounded-xl flex flex-wrap gap-2 justify-center p-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="mb-20 pt-2"></div>
        <h2 className="text-2xl mb-5 mt-2  text-white text-left">
          <span className="text-red-400 font-bold">O</span>thers
        </h2>
        <div className="m-2 rounded-xl flex flex-wrap gap-2 justify-center p-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
