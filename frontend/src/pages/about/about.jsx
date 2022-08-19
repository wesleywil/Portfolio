import ContactTip from "../../components/contact_tip/contact_tip.component";

import Image from "../../assets/dev_image.svg";

const About = () => {
  return (
    <div className="text-center pt-52 mx-auto flex  gap-2">
      <div className="pl-10 w-1/2 text-white">
        <h1 className="text-7xl mb-5 mt-1 text-white text-left">
          <span className="text-red-400 font-bold">A</span>bout
        </h1>
        <p className="text-xl text-left mt-2 mb-4 p-2">
          I'm a Full-Stack Developer located in Brazil, I love technology and
          art, especially when we can combine both, like beatiful sites,
          digitial paintings and 3d modeling.
        </p>
        <p className="text-xl text-left mt-2 mb-4 p-2">
          I'm always trying to improve myself by everyday becoming a little
          better, I love to learn new tech and challenge myself with frameworks
          and programming languages. Fan of Football(Soccer), E-sports, animes,
          comics and mangas.
        </p>
        <p className="text-xl text-left mt-2 p-2">
          Interested in front-end and backend, working right now in personal
          projects but always ready for a new challenge in my starting career.
        </p>
        <div className="border-b-4 my-2 w-20 mx-auto"></div>
        <div className="text-left p-2">
          <ContactTip />
        </div>
      </div>
      <div className="w-1/2 p-2">
        <img src={Image} alt="development image" />
      </div>
    </div>
  );
};

export default About;
