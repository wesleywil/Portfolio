import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { close } from "../../redux/adminForm/adminFormSlice";
import AdminFormProject from "../admin_form_project/admin_form_project.component";

const AdminForm = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.adminForm.title);
  const data = useSelector((state) => state.adminForm.data);
  const isProject = useSelector((state) => state.adminForm.isproject);

  useEffect(() => {
    console.log("PROJECT => ", isProject);
  }, [dispatch, text, data, isProject]);

  return (
    <div>
      <h1 className="text-white text-3xl uppercase">{text}</h1>
      <form className="flex flex-col text-white text-xl">
        <label>Title</label>
        <input
          type="text"
          className="text-black font-semibold px-2"
          defaultValue={data ? data.title : ""}
        />
        <label>Description</label>
        <textarea
          className="text-black font-semibold px-2"
          defaultValue={data ? data.description : ""}
        ></textarea>
        {isProject ? (
          <AdminFormProject data={data} />
        ) : data ? (
          data.link ? (
            <AdminFormProject data={data} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div className="flex gap-2 justify-center my-2">
          <button className="bg-red-400 hover:bg-red-500 text-2xl font-semibold px-2 rounded-xl">
            Submit
          </button>
          <button
            type="button"
            className="bg-blue-400 hover:bg-blue-500 text-2xl font-semibold px-2 rounded-xl"
            onClick={() => dispatch(close())}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;