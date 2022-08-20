import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="w-80">
      <div className="flex relative rounded-xl">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
          src="https://dummyimage.com/300x200"
        />
        <div className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-xl">
          <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shooting Stars
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="text-center flex justify-center">
            <a
              href="https://github.com/wesleywil"
              target="_blank"
              className=" text-slate-800 hover:text-slate-600 active:text-red-400 text-4xl mt-2"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
