const SideBarLink = ({ Icon, text }) => {
  return (
    <div className="text-slate-700 mx-auto flex flex-col justify-center text-center mt-12 text-3xl">
      <h1 className="p-0 m-0 mx-auto">{Icon}</h1>
      <h1>{text}</h1>
    </div>
  );
};
export default SideBarLink;
