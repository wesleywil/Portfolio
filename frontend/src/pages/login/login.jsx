import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/account/accountSlice";

const Login = () => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("Trying to Login");
    event.preventDefault();
    const data = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    };
    dispatch(loginUser(data));
  };

  return (
    <div className="text-center pt-52 w-1/2 xl:w-1/4  mx-auto md:h-screen ">
      <div className="border-2 rounded-xl">
        <h1 className="text-5xl text-white font-semibold mb-2 border-b-2 p-2">
          <span className="text-red-400 font-bold">L</span>ogin
        </h1>
        <form
          className="text-xl flex flex-col p-2 text-white"
          onSubmit={handleSubmit}
        >
          <label className="text-left">Username</label>
          <input
            type="text"
            className="bg-black/30 py-1 px-2 rounded-xl shadow-inner"
            name="username"
          />
          <label className="text-left">Password</label>
          <input
            type="password"
            className="bg-black/30 py-1 px-2 rounded-xl shadow-inner"
            name="password"
          />
          <div className="flex gap-4 justify-center my-2">
            <button className="border-2 border-red-400 hover:bg-red-400 text-red-400 hover:text-slate-200 p-1 px-2 text-xl font-semibold rounded-xl transition duration-700 ease-in-out">
              Login
            </button>
            <button
              onClick={() => history("../admin", { replace: true })}
              type="button"
              className="border-2 border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-slate-200 p-1 px-2 text-xl font-semibold rounded-xl transition duration-700 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
