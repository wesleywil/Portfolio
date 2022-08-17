const About = () => {
  return (
    <div>
      <div className="pt-56 text-5xl text-center text-white">
        <div className="border-b-4 mb-2 w-20 mx-auto"></div>
        <h1 className="mx-auto w-1/3">
          More about <span className="text-red-400">ME</span>
        </h1>
        <div className="p-2 w-1/3 mx-auto">
          <p className="text-xl text-left mt-2 mb-4 p-2">
            I'm a Full-Stack Developer located in Brazil, I love technology and
            art, especially when we can combine both, like beatiful sites,
            digitial paintings and 3d modeling.
          </p>
          <p className="text-xl text-left mt-2 mb-4 p-2">
            I'm always trying to improve myself by everyday becoming a little
            better, I love to learn new tech and challenge myself with
            frameworks and programming languages. Fan of Football(Soccer),
            E-sports, animes, comics and mangas.
          </p>
          <p className="text-xl text-left mt-2 p-2">
            Interested in front-end and backend, working right now in personal
            projects but always ready for a new challenge in my starting career.
          </p>
          <div className="border-b-4 my-2 w-20 mx-auto"></div>
          <div className="text-left p-2">
            <button className="text-red-400 hover:text-red-300 underline text-xl">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
