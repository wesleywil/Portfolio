import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AdminCardProject from "../../components/admin_card_project/admin_card_project.component";
import AdminCardTag from "../../components/admin_card_tag/admin_card_tag.component";
import AdminStatusMessage from "../../components/admin_status_message/admin_status_message.component";
import AdminForm from "../../components/admin_form/admin_form.component";

import { getToken } from "../../redux/account/accountSlice";
import { useEffect } from "react";

const Admin = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const hidden = useSelector((state) => state.adminForm.hidden);
  // const projects = useSelector(allProjects);
  // const tags = useSelector(allTags);

  useEffect(() => {}, [token, hidden, dispatch]);

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
        <AdminCardProject />
        <div className="flex flex-col justify-between">
          <AdminStatusMessage />
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
        <AdminCardTag />
      </div>
    </div>
  );
};
export default Admin;
