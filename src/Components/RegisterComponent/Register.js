import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setField,
  resetForm,
  registerUser,
} from "../../features/register/RegisterSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    name,
    email,
    password,
    mobile,
    address,
    city,
    gender,
    loading,
    error,
    success,
  } = useSelector((state) => state.register);

  const HandleChange = (e) => {
    dispatch(setField({ field: e.target.name, value: e.target.value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !mobile || !address || !city || !gender) {
      alert("All fields are required");
      return;
    }

    dispatch(
      registerUser({
        name,
        email,
        password,
        mobile,
        address,
        city,
        gender,
      })
    );
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetForm());
        navigate("/login");
      }, 1200);
    }
  }, [success, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ✅ Register Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-3xl font-extrabold text-center text-indigo-600">
            Register Here 🚀
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Create your account to get started
          </p>

          {/* ✅ Alerts */}
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
              ✅ Registered Successfully! Redirecting to Login...
            </div>
          )}

          <form onSubmit={HandleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                name="name"
                value={name}
                onChange={HandleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block mb-1 font-semibold">Password</label>
              <input
                name="password"
                value={password}
                onChange={HandleChange}
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-1 font-semibold">Mobile</label>
              <input
                name="mobile"
                value={mobile}
                onChange={HandleChange}
                type="text"
                placeholder="Enter your mobile"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 font-semibold">Address</label>
              <input
                name="address"
                value={address}
                onChange={HandleChange}
                type="text"
                placeholder="Enter your address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 font-semibold">City</label>
              <select
                name="city"
                value={city}
                onChange={HandleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-semibold">Gender</label>
              <div className="flex items-center gap-6">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={HandleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                disabled={loading}
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-emerald-500 transition disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
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
          </form>
        </div>

        {/* ✅ Right Side Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:bg-blue-50 transition">
            <img
              className="rounded-xl w-full h-52 object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="team work"
            />

            <h3 className="text-xl font-bold mt-4">Mini Profile Card</h3>
            <p className="text-gray-600 mt-2 text-sm">
              This card uses Tailwind utilities like <b>shadow-lg</b>,{" "}
              <b>rounded-2xl</b>, <b>p-6</b>.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  A
                </div>

                <div>
                  <p className="font-semibold">Naveen</p>
                  <p className="text-xs text-gray-500">Frontend Learner</p>
                </div>
              </div>

              <button className="text-indigo-600 font-semibold hover:underline">
                Follow
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:bg-blue-50 transition">
            <h1 className="text-3xl font-bold text-center text-blue-600">
              We Make Your Future Bright ✨
            </h1>
            <p className="mt-4 text-gray-600 font-semibold text-center">
              Our Company is dedicated to providing the best services and products
              for your future success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
