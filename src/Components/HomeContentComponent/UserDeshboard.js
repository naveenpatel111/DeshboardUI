import  { useState } from "react";

function UserDashboardContent() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex">
    
      <aside className="hidden lg:block w-64 bg-white shadow-xl p-6 min-h-screen">
        <h1 className="text-2xl font-extrabold text-indigo-600 mb-10">
          User Menu
        </h1>

        <nav className="space-y-3">
          
          <button
            onClick={() => setActive("Dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Dashboard"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">📊</span>
            Dashboard
          </button>

             <button
            onClick={() => setActive("Profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Profile"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">👤</span>
            Profile
          </button>

         
          <button
            onClick={() => setActive("Orders")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Orders"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">🛒</span>
            Orders
          </button>

          
          <button
            onClick={() => setActive("Settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Settings"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">⚙️</span>
            Settings
          </button>

    <button
            onClick={() => setActive("Support")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Support"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">💬</span>
            Support
          </button>
        </nav>

    
        <div className="mt-10 bg-indigo-50 p-4 rounded-2xl border border-indigo-200">
          <p className="text-sm text-gray-600 font-semibold">Currently On:</p>
          <h2 className="text-lg font-extrabold text-indigo-600 mt-1">
            {active}
          </h2>
        </div>
      </aside>
     
 
      <main className="flex-1 bg-gray-100 min-h-screen p-6 space-y-8">
    
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold">Welcome User 👋</h1>
            <p className="mt-2 text-indigo-100">
              Track your courses, orders, and learning progress.
            </p>
            <p className="mt-2 text-sm font-semibold text-indigo-100">
              Active Section: <span className="text-white">{active}</span>
            </p>
          </div>

          <img
            className="w-full md:w-72 rounded-2xl shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop"
            alt="user"
          />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold">My Courses</p>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-2">8</h2>
            </div>
            <div className="text-4xl">📚</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold">Completed</p>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-2">4</h2>
            </div>
            <div className="text-4xl">✅</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold">Certificates</p>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-2">2</h2>
            </div>
            <div className="text-4xl">🏆</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold">Wallet</p>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-2">
                ₹2500
              </h2>
            </div>
            <div className="text-4xl">💰</div>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800">
            Recent Orders 🛒
          </h2>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-indigo-50 transition">
                  <td className="p-3 font-semibold">#1021</td>
                  <td className="p-3">React Basics</td>
                  <td className="p-3">₹499</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-indigo-50 transition">
                  <td className="p-3 font-semibold">#1022</td>
                  <td className="p-3">JavaScript Mastery</td>
                  <td className="p-3">₹799</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-xs">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-indigo-50 transition">
                  <td className="p-3 font-semibold">#1023</td>
                  <td className="p-3">Node + Express</td>
                  <td className="p-3">₹999</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800">
            Recent Activity 📌
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between bg-gray-50 border rounded-xl p-4 hover:bg-indigo-50 transition">
              <div>
                <p className="font-semibold text-gray-800">
                  Completed React Basics Course
                </p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
              <span className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white font-semibold">
                View
              </span>
            </div>

            <div className="flex items-center justify-between bg-gray-50 border rounded-xl p-4 hover:bg-indigo-50 transition">
              <div>
                <p className="font-semibold text-gray-800">
                  Downloaded Certificate
                </p>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
              <span className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white font-semibold">
                View
              </span>
            </div>

            <div className="flex items-center justify-between bg-gray-50 border rounded-xl p-4 hover:bg-indigo-50 transition">
              <div>
                <p className="font-semibold text-gray-800">
                  Joined New JavaScript Course
                </p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
              <span className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white font-semibold">
                View
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDashboardContent;
