const Homepage = () => {
  return (
    <div>
      <div className="pt-56 text-8xl text-center text-white">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="text-red-400">W</span>esley{" "}
          <span className="text-red-400">W</span>ilson
        </h1>
        <h1>A web developer</h1>
        <h2 className="text-3xl text-slate-200 ">Django + Reactjs</h2>
        <div
          className="mt-4 tooltip tooltip-error tooltip-bottom"
          data-tip="wesleywilsonti@gmail.com"
        >
          <button className=" text-2xl border-2 text-red-400 hover:text-red-500 border-red-400 hover:border-red-500 p-2 font-semibold rounded-xl">
            Contact Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
