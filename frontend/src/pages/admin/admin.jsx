import AdminCardInfo from "../../components/admin_card_info/admin_card_info.component";
import AdminStatusMessage from "../../components/admin_status_message/admin_status_message.component";
const Admin = () => {
  return (
    <div className="text-center xl-pt-52 pt-10 mx-auto bg-black/50 h-screen">
      <h1 className="text-7xl text-white underline">Admin</h1>
      <div className="flex justify-center gap-2 w-3/4 rounded-2xl mx-auto border-2 mt-10 p-2">
        <AdminCardInfo />
        <div className="flex flex-col justify-between">
          <AdminStatusMessage />
          <button className="bg-red-400 hover:bg-red-500 text-slate-200 hover:text-slate-100 mb-6 text-xl p-2 w-1/2 mx-auto rounded-full transition duration-700 ease-in-out">
            Login
          </button>
        </div>
        <AdminCardInfo />
      </div>
    </div>
  );
};
export default Admin;
