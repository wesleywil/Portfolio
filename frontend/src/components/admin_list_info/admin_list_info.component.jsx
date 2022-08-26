import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

import { update } from "../../redux/adminForm/adminFormSlice";
import { useEffect } from "react";

const AdminListInfo = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, update, item]);
  return (
    <li className="flex text-white font-semibold bg-black/30 gap-2 justify-center text-2xl border-b-2 px-2 py-4">
      {item.title}{" "}
      <button
        onClick={() => dispatch(update(item))}
        className="pt-1 text-yellow-200 hover:text-yellow-400 transition duration-700 ease-in-out"
      >
        <FaRegEdit />
      </button>{" "}
      <button className="pt-1 text-red-400 hover:text-red-600 transition duration-700 ease-in-out">
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default AdminListInfo;
