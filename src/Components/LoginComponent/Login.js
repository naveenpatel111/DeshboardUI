import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { setField, resetForm, loginUser } from "../../features/Login/LoginSlice.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, loading, error, success } = useSelector(
    (state) => state.login
  );

  const [showPass, setShowPass] = useState(false);

  const HandleChange = (e) => {
    dispatch(setField({ field: e.target.name, value: e.target.value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and Password are required");
      return;
    }

    dispatch(loginUser({ email, password }));
  };
   
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetForm());
        if(localStorage.getItem("role") === "admin") navigate("/adminDashboard");
        else    
        navigate("/userDashboard");
      }, 1200);
    }
  }, [success, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition">
          <h2 className="text-3xl font-extrabold text-center text-indigo-600">
            Login Here 🔐
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Welcome back! Please login to continue
          </p>

          {loading && (
            <div className="mt-4 p-3 rounded-lg bg-blue-100 text-blue-700 font-semibold text-center">
              Loading... Please wait ⏳
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-700 font-semibold text-center">
              ❌ {error}
            </div>
          )}

          {success && (
            <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-700 font-semibold text-center">
              ✅ Login Successful! Redirecting...
            </div>
          )}

          <form onSubmit={HandleSubmit} className="mt-6 space-y-4">
  
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                name="email"
                value={email}
                onChange={HandleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Password</label>
              <div className="relative">
                <input
                  name="password"
                  value={password}
                  onChange={HandleChange}
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 font-semibold text-sm"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

     
            <div className="text-right">
              <button
                type="button"
                className="text-indigo-600 font-semibold hover:underline text-sm"
                onClick={() => alert("Forgot Password clicked")}
              >
                Forgot Password?
              </button>
            </div>

     
            <div className="flex gap-3 pt-2">
              <button
                disabled={loading}
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-emerald-500 transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={() => dispatch(resetForm())}
                className="flex-1 bg-gray-200 py-3 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
              >
                Reset
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 font-bold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        <div className="space-y-6">
       
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:bg-blue-50 transition">
            <img
              className="rounded-xl w-full h-52 object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="team work"
            />

            <h3 className="text-xl font-bold mt-4">Secure Login System</h3>
            <p className="text-gray-600 mt-2 text-sm">
              This login page matches your register UI using{" "}
              <b>rounded-2xl</b>, <b>shadow-lg</b>, <b>p-6</b>.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  L
                </div>

                <div>
                  <p className="font-semibold">Login Module</p>
                  <p className="text-xs text-gray-500">Redux + Tailwind</p>
                </div>
              </div>

              <button className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>
          </div>

    
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:bg-blue-50 transition">
            <h1 className="text-3xl font-bold text-center text-blue-600">
              Welcome Back Again 💙
            </h1>
            <p className="mt-4 text-gray-600 font-semibold text-center">
              Login now and continue your journey with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
