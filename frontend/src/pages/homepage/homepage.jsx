import { DiDjango, DiReact } from "react-icons/di";
const Homepage = () => {
  return (
    <div>
      <div className="pt-40 xl:pt-56 xl:text-8xl md:text-7xl text-3xl text-center text-white h-screen xl:h-full ">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="text-red-400">W</span>esley{" "}
          <span className="text-red-400">W</span>ilson
        </h1>
        <h1>A web developer</h1>
        <h2 className=" text-slate-200 flex justify-center">
          <span className="text-5xl xl:text-7xl md:text-7xl">
            <DiDjango />
          </span>
          <span className="xl:text-5xl md:text-5xl pt-1 px-2">+</span>
          <span className="text-4xl xl:text-5xl md:text-5xl pt-1 xl:pt-3 md:pt-3">
            <DiReact />
          </span>
        </h2>
        <div
          className="mt-4 tooltip tooltip-error tooltip-bottom"
          data-tip="wesleywilsonti@gmail.com"
        >
          <a
            href="mailto: wesleywilsonti@gmail.com"
            className=" text-lg xl:text-2xl md:text-4xl ml-2 p-1 xl:p-2 md:p-2 border-2 text-red-400 hover:text-red-500 border-red-400 hover:border-red-500  font-semibold rounded-xl"
          >
            Contact Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
