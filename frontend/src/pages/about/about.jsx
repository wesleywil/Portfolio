import ContactTip from "../../components/contact_tip/contact_tip.component";

import Image from "../../assets/dev_image.svg";
import LogoImage from "../../assets/wwlogo.svg";

const About = () => {
  return (
    <div className="text-center pt-10 xl:pt-52 xl:mx-auto flex flex-col xl:flex-row xl:gap-2 ">
      <div className=" xl:pl-10 xl:w-1/2 text-white ">
        <h1 className="text-7xl mb-5 mt-1 text-white text-center xl:text-left ">
          <span className="text-red-400 font-bold">A</span>bout
        </h1>
        <p className="text-xl text-center xl:text-left mt-2 mb-4 p-2 ">
          I'm a Full-Stack Developer located in Brazil, I love technology and
          art, especially when we can combine both, like beatiful sites,
          digitial paintings and 3d modeling.
        </p>
        <p className="text-xl text-center xl:text-left mt-2 mb-4 p-2">
          I'm always trying to improve myself by everyday becoming a little
          better, I love to learn new tech and challenge myself with frameworks
          and programming languages. Fan of Football(Soccer), E-sports, animes,
          comics and mangas.
        </p>
        <p className="text-xl text-center xl:text-left mt-2 p-2">
          Interested in front-end and backend, working right now in personal
          projects but always ready for a new challenge in my starting career.
        </p>
        <div className="border-b-4 my-2 w-20 mx-auto"></div>
        <div className="m-2 p-2">
          <a
            href="mailto: wesleywilsonti@gmail.com"
            className="block xl:hidden text-red-400 hover:text-white text-xl font-semibold  flex flex-col"
          >
            <span className="text-white ">E-mail</span>
            wesleywilsonti@gmail.com
          </a>
        </div>
        <div className="hidden xl:block text-center xl:text-left p-2">
          <ContactTip />
        </div>
      </div>
      <div className="xl:hidden md:hidden w-20 mx-auto m-2 py-3 px-4 rounded-full border-2">
        <img src={LogoImage} alt="" />
      </div>
      <div className="hidden xl:block md:block w-1/2 md:w-2/3 md:mx-auto p-2">
        <img src={Image} alt="development image" />
      </div>
    </div>
  );
};

export default About;
