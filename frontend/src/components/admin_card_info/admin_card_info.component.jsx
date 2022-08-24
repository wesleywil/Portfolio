import { FaPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa";

import AdminListInfo from "../admin_list_info/admin_list_info.component";

const AdminCardInfo = () => {
  return (
    <div className="m-2 overflow-hidden border-2 border-slate-200 rounded-xl">
      <div className="flex flex-col ">
        <div className="bg-slate-700/50 p-2">
          <div className="flex justify-between gap-3 ">
            <h1 className="text-3xl text-white ml-12">Projects</h1>
            <button className="bg-red-400 hover:bg-red-500 text-2xl text-white mr-2 mt-1 p-2 rounded-full transition duration-700 ease-in-out">
              <FaPlus />
            </button>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-white">10</h1>
          </div>
        </div>

        <div className="flex flex-col border-t-2">
          <ul className="list-none">
            <AdminListInfo />
            <AdminListInfo />
            <AdminListInfo />
            <AdminListInfo />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminCardInfo;
