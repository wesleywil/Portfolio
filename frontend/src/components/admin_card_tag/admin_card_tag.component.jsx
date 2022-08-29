import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import AdminListInfo from "../admin_list_info/admin_list_info.component";

import { allTags } from "../../redux/tags/tagsSlice";
import { create } from "../../redux/adminForm/adminFormSlice";

const AdminCardTag = () => {
  const dispatch = useDispatch();
  const tags = useSelector(allTags);

  useEffect(() => {
    console.log("TAGS ===> ", tags);
  }, [tags, dispatch]);
  return (
    <div className="m-2 overflow-hidden border-2 border-slate-200 rounded-xl xl:w-1/3">
      <div className="flex flex-col ">
        <div className="bg-slate-700/50 p-2">
          <div className="text-center flex justify-between border-b-2 pb-2">
            <h1 className="text-3xl text-white">Tags</h1>
            <button
              onClick={() => dispatch(create(false))}
              className="bg-red-400 hover:bg-red-500 text-2xl text-white mr-2 mt-1 p-2 rounded-full transition duration-700 ease-in-out"
            >
              <FaPlus />
            </button>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-white">{tags.length}</h1>
          </div>
        </div>

        <div className="flex flex-col border-t-2 h-96 overflow-y-auto">
          <ul className="list-none">
            {tags ? (
              tags.length ? (
                tags.map((item) => (
                  <AdminListInfo key={item.id} item={item} isproject={false} />
                ))
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

export default AdminCardTag;
