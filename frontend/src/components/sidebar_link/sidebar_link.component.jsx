import { NavLink } from "react-router-dom";

const SideBarLink = ({ Icon, text, toPage }) => {
  return (
    <NavLink
      to={toPage}
      className="text-slate-200 hover:text-red-400 xl:text-slate-600 hover:xl:text-red-400 mx-auto flex flex-col justify-center text-center mt-12 xl:text-3xl md:text-xl text-base transition duration-700 ease-in-out"
    >
      <h1 className="p-0 m-0 mx-auto">{Icon}</h1>
      <h1>{text}</h1>
    </NavLink>
  );
};
export default SideBarLink;
