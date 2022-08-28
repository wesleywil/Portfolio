import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import AdminListInfo from "../admin_list_info/admin_list_info.component";

import { create } from "../../redux/adminForm/adminFormSlice";

const AdminCardInfo = ({ items, text }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ITEMS", items);
  }, [items, dispatch]);
  return (
    <div className="m-2 overflow-hidden border-2 border-slate-200 rounded-xl xl:w-1/3">
      <div className="flex flex-col ">
        <div className="bg-slate-700/50 p-2">
          <div className="text-center ">
            <h1 className="text-3xl text-white">{text}</h1>
            {/* <button
              onClick={() => dispatch(create())}
              className="bg-red-400 hover:bg-red-500 text-2xl text-white mr-2 mt-1 p-2 rounded-full transition duration-700 ease-in-out"
            >
              <FaPlus />
            </button> */}
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-white">
              {items.length}
            </h1>
          </div>
        </div>

        <div className="flex flex-col border-t-2 h-96 overflow-y-auto">
          <ul className="list-none">
            {items ? (
              items.length ? (
                items.map((item) => <AdminListInfo key={item.id} item={item} />)
              ) : (
                <li>NO ITEMS</li>
              )
            ) : (
              <li>NO ITEMS</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminCardInfo;
