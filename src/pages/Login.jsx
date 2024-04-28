import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/71225a91-df69-403f-a635-2d24310f19a6/VN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b7380b7a-6c17-456a-8c16-97d433fde0e7_medium.jpg"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-3 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-3 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />

              <button className="w-full py-2 my-6 bg-red-600 rounded font-bold">
                Sign In
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me{" "}
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">New to Netflix? </span>
                <Link to="/signup">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
