import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import AdminCardInfo from "../../components/admin_card_info/admin_card_info.component";
import AdminStatusMessage from "../../components/admin_status_message/admin_status_message.component";
import AdminForm from "../../components/admin_form/admin_form.component";

import { getToken } from "../../redux/account/accountSlice";
import { allProjects } from "../../redux/projects/projectsSlice";
import { allTags } from "../../redux/tags/tagsSlice";
import { create } from "../../redux/adminForm/adminFormSlice";

const Admin = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const hidden = useSelector((state) => state.adminForm.hidden);
  const projects = useSelector(allProjects);
  const tags = useSelector(allTags);

  return (
    <div className="text-center xl:pt-52 pt-10 mx-auto bg-black/50 h-screen">
      <div
        className={`absolute bg-slate-800/50 backdrop-blur-sm mx-auto inset-1/3 mr-2   p-2 h-1/2 w-96 rounded-xl border-2 border-slate-200 ${
          hidden ? "hidden" : ""
        } `}
      >
        <AdminForm />
      </div>
      <h1 className="text-7xl text-white underline">Admin</h1>
      <div className="flex justify-center gap-2 w-3/4 rounded-2xl mx-auto border-2 mt-10 p-2">
        <AdminCardInfo text={"Projects"} items={projects} isProject={true} />
        <div className="flex flex-col justify-between">
          <AdminStatusMessage />
          <div className="flex justify-between gap-2 mb-40 mt-2">
            <button
              onClick={() => dispatch(create(true))}
              className="bg-red-400  hover:bg-red-500 py-2 text-white font-bold text-3xl px-1 rounded-full"
            >
              <FaPlus />
            </button>
            <button
              onClick={() => dispatch(create(false))}
              className="bg-blue-400 hover:bg-blue-500 py-2 text-white font-bold text-3xl px-1 rounded-full"
            >
              <FaPlus />
            </button>
          </div>

          {token ? (
            <button
              onClick={() => localStorage.removeItem("token")}
              className="bg-red-400 hover:bg-red-500 text-slate-200 hover:text-slate-100 mb-6 text-xl p-2 w-1/2 mx-auto rounded-full transition duration-700 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => history("../login", { replace: true })}
              className="bg-red-400 hover:bg-red-500 text-slate-200 hover:text-slate-100 mb-6 text-xl p-2 w-1/2 mx-auto rounded-full transition duration-700 ease-in-out"
            >
              Login
            </button>
          )}
        </div>
        <AdminCardInfo text={"Tags"} items={tags} isProject={false} />
      </div>
    </div>
  );
};
export default Admin;
