import { NavLink } from "react-router-dom";

const SideBarLink = ({ Icon, text, toPage }) => {
  return (
    <NavLink
      to={toPage}
      className="text-slate-700 hover:text-slate-900 mx-auto flex flex-col justify-center text-center mt-12 text-3xl"
    >
      <h1 className="p-0 m-0 mx-auto">{Icon}</h1>
      <h1>{text}</h1>
    </NavLink>
  );
};
export default SideBarLink;
