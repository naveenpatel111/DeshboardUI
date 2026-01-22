import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [openSidebar, setOpenSidebar] = useState(false);

  const navLinks = [
    { name: "Dashboard", icon: "📊" },
    { name: "Profile", icon: "👤" },
    { name: "Orders", icon: "🛒" },
    { name: "Settings", icon: "⚙️" },
    { name: "Support", icon: "💬" },
  ];

  const handleLogout = () => {
    // ✅ you can call backend logout API here
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out ✅");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* ✅ Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-50 transform transition duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Sidebar Logo */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-extrabold text-indigo-600">MyApp</h1>
          <button
            onClick={() => setOpenSidebar(false)}
            className="lg:hidden text-2xl font-bold text-gray-600"
          >
            ✖
          </button>
        </div>

        {/* Nav Links */}
        <nav className="space-y-3">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
                ${
                  active === item.name
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Dummy Profile Card */}
        <div className="mt-10 bg-indigo-50 p-4 rounded-2xl border border-indigo-200">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
              alt="user"
            />
            <div>
              <h3 className="font-bold text-gray-800">Naveen</h3>
              <p className="text-xs text-gray-500">Frontend User</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Welcome back! Explore your dashboard with ease 🚀
          </p>
        </div>
      </aside>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        {/* ✅ Header */}
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
          {/* Sidebar button (Mobile) */}
          <button
            onClick={() => setOpenSidebar(true)}
            className="lg:hidden bg-gray-100 px-3 py-2 rounded-lg font-bold"
          >
            ☰
          </button>

          {/* ✅ Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h2 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
              USER DASHBOARD
            </h2>
          </div>

          {/* ✅ Right Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* ✅ Body */}
        <main className="p-6 space-y-8">
          {/* ✅ Welcome Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold">Welcome Back 👋</h1>
              <p className="mt-2 text-indigo-100">
                Here is your personal dashboard overview.
              </p>
              <button className="mt-4 bg-white text-indigo-700 px-5 py-2 rounded-xl font-bold hover:bg-gray-100 transition">
                Explore Now
              </button>
            </div>

            <img
              className="w-full md:w-72 rounded-2xl shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop"
              alt="banner"
            />
          </div>

          {/* ✅ Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Orders", value: "120+", icon: "🛒" },
              { title: "Wallet Balance", value: "₹8,540", icon: "💰" },
              { title: "Active Plans", value: "3", icon: "🔥" },
              { title: "Support Tickets", value: "5", icon: "🎧" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-500 font-semibold">{card.title}</p>
                  <h2 className="text-2xl font-extrabold text-gray-800 mt-2">
                    {card.value}
                  </h2>
                </div>
                <div className="text-4xl">{card.icon}</div>
              </div>
            ))}
          </div>

          {/* ✅ Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ✅ Activity Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800">
                Recent Activity 📌
              </h2>

              <div className="mt-5 space-y-4">
                {[
                  {
                    title: "Order #2048 placed successfully",
                    time: "2 hours ago",
                    badge: "Success",
                  },
                  {
                    title: "Profile updated",
                    time: "Yesterday",
                    badge: "Updated",
                  },
                  {
                    title: "New plan activated",
                    time: "2 days ago",
                    badge: "Active",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 border rounded-xl p-4 hover:bg-indigo-50 transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>

                    <span className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white font-semibold">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-gray-800">My Profile 👤</h2>

              <div className="flex flex-col items-center mt-6">
                <img
                  className="w-20 h-20 rounded-full border-4 border-indigo-600 object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="profile"
                />

                <h3 className="mt-4 text-lg font-extrabold text-gray-800">
                  Naveen Kumar
                </h3>
                <p className="text-gray-500 text-sm">naveen@gmail.com</p>

                <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-500 transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Best Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Fast Delivery 🚀",
                desc: "Get your products delivered quickly with live tracking.",
                img: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "Secure Payments 🔒",
                desc: "All payments are encrypted & safe with us.",
                img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "24/7 Support 💬",
                desc: "Any issue? We are always here for you.",
                img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=900&auto=format&fit=crop",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-extrabold text-gray-800">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{feature.desc}</p>
                  <button className="mt-4 text-indigo-600 font-bold hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
