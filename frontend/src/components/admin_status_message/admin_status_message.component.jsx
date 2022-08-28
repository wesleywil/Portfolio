import { useSelector } from "react-redux";

import { FaSmileWink } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";

const AdminStatusMessage = () => {
  const message = useSelector((state) => state.messageStatus.message);

  const [status, setStatus] = useState(<FaSmileWink />);

  useEffect(() => {
    if (message !== "idle") {
      setStatus(message);
    } else {
      setStatus(<FaSmileWink />);
    }
  }, [message]);

  return (
    <div className="bg-slate-700 w-52 mt-2 rounded-xl border-2 border-slate-700 h-28 flex justify-center items-center">
      <h1 className="text-yellow-400 font-bold text-2xl ">{status}</h1>
    </div>
  );
};
export default AdminStatusMessage;
