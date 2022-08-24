import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const AdminListInfo = () => {
  return (
    <li className="flex text-white font-semibold bg-black/30 gap-2 justify-center text-2xl border-b-2 px-2 py-4">
      Project Name{" "}
      <button className="pt-1 text-yellow-200 hover:text-yellow-400 transition duration-700 ease-in-out">
        <FaRegEdit />
      </button>{" "}
      <button className="pt-1 text-red-400 hover:text-red-600 transition duration-700 ease-in-out">
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default AdminListInfo;
