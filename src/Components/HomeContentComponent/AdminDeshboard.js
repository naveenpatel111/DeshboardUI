import React, { useEffect, useRef, useState } from "react";
import { User_API_URL } from "../../API_URL";
import axios from "axios";

function AdminDashboardContent() {
  const [active, setActive] = useState("Admin Dashboard");

  const [UserList, SetUserList] = useState([]);
  const [pagination, SetPagination] = useState({});

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const listInnerRef = useRef();

  const fetchUsers = async (page = 1, isNewSearch = false) => {
    try {
      setLoading(true); 

      const res = await axios.get(User_API_URL + "/fetch", {
        params: { page, limit: 10, search, role, status },
        withCredentials: true,
      });

      
      if (isNewSearch) {
        SetUserList(res.data.users);
      } else {
        SetUserList((prev) => [...prev, ...res.data.users]);
      }

      SetPagination(res.data.pagination);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

    useEffect(() => {
  setCurrentPage(1);
  SetUserList([]);
  fetchUsers(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [search, status, role]);


useEffect(() => {
  if (currentPage > 1) {
    fetchUsers(currentPage);
  }
}, [currentPage]);


  const onScroll = () => {

  if (!listInnerRef.current) return;

 
  const scrollTop = listInnerRef.current.scrollTop;      
  const clientHeight = listInnerRef.current.clientHeight; 
  const scrollHeight = listInnerRef.current.scrollHeight;

  const reachedBottom = scrollTop + clientHeight >= scrollHeight - 5;

  if (reachedBottom) {

    const morePagesLeft = currentPage < pagination.totalPages;

    if (morePagesLeft && !loading) {
      const nextPage = currentPage + 1;

      setCurrentPage(nextPage); 
      fetchUsers(nextPage);     
    }
  }
};

 
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers(1, true);
  };


  const handleReset = () => {
    setSearch("");
    setStatus("");
    setRole("");
    setCurrentPage(1);
    fetchUsers(1, true);
  };

  return (
    <div className="flex">
   
      <aside className="hidden lg:block w-64 bg-white shadow-xl p-6 min-h-screen">
        <h1 className="text-2xl font-extrabold text-indigo-600 mb-10">
          Admin Menu
        </h1>

        <nav className="space-y-3">
          <button
            onClick={() => setActive("Admin Dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Admin Dashboard"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">📊</span>
            Admin Dashboard
          </button>

          <button
            onClick={() => setActive("Users")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
            ${
              active === "Users"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <span className="text-lg">👥</span>
            Users
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

      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-extrabold">Welcome Admin 👑</h1>
          <p className="mt-2 text-indigo-100">
            Manage users, courses, and platform reports.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Search & Filter Users 🔍
          </h2>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="border p-3 rounded-xl outline-none"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-3 rounded-xl outline-none"
            >
              <option value="">All Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-3 rounded-xl outline-none"
            >
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
       
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
              >
                Search
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Users List 📌</h2>

        
          <div
            ref={listInnerRef}
            onScroll={onScroll}
            className="overflow-y-auto mt-4 h-[450px]"
          >
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 sticky top-0">
                <tr>
                  <th className="p-3">id</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">City</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {UserList.length > 0 ? (
                  UserList.map((user, index) => (
                    <tr
                      key={user.id || index}
                      className="border-b hover:bg-indigo-50 transition"
                    >
                      <td className="p-3 font-semibold">{user.id}</td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.mobile}</td>
                      <td className="p-3">{user.city}</td>
                      <td className="p-3">{user.gender}</td>
                      <td className="p-3 font-semibold">{user.role}</td>

                      <td className="p-3">
                        {user.status === 1 ? (
                          <span className="px-3 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
                            Active
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-semibold">
                            Inactive
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-4 text-center text-gray-500">
                      No Users Found ❌
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

    
            {loading && (
              <p className="text-center py-4 text-gray-500 font-semibold">
                Loading...
              </p>
            )}

            {currentPage === pagination.totalPages && !loading && (
              <p className="text-center py-4 text-gray-400 font-semibold">
                ✅ No more users
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboardContent;



//---------------------------

// import React, { useEffect, useState } from "react";
// import { User_API_URL } from "../../API_URL";
// import axios from "axios";

// function AdminDashboardContent() {
//   const [active, setActive] = useState("Admin Dashboard");

//   const [UserList, SetUserList] = useState([]);
//   const [pagination,SetPagination] = useState({});

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("");
//   const [role, setRole] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get(User_API_URL + "/fetch", {
//         params: { page:currentPage, search, role, status },
//         withCredentials: true
//       });
//       console.log(res.data)
//       SetUserList(res.data.users);
//       SetPagination(res.data.pagination);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   // console.log(UserList?.users, '----jgffg')
//   // console.log( pagination, '----jgffg')
//   useEffect(() => {
//     fetchUsers();
//   }, [currentPage,status,role,search]);


//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchUsers();
//   };

//   const handleReset = () => {
//     setSearch("");
//     setStatus("");
//     setRole("");
//     fetchUsers();
//   };

//   return (
//     <div className="flex">

//       <aside className="hidden lg:block w-64 bg-white shadow-xl p-6 min-h-screen">
//         <h1 className="text-2xl font-extrabold text-indigo-600 mb-10">
//           Admin Menu
//         </h1>

//         <nav className="space-y-3">
//           <button
//             onClick={() => setActive("Admin Dashboard")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
//             ${active === "Admin Dashboard"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
//               }`}
//           >
//             <span className="text-lg">📊</span>
//             Admin Dashboard
//           </button>

//           <button
//             onClick={() => setActive("Users")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition
//             ${active === "Users"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
//               }`}
//           >
//             <span className="text-lg">👥</span>
//             Users
//           </button>
//         </nav>

//         <div className="mt-10 bg-indigo-50 p-4 rounded-2xl border border-indigo-200">
//           <p className="text-sm text-gray-600 font-semibold">Currently On:</p>
//           <h2 className="text-lg font-extrabold text-indigo-600 mt-1">
//             {active}
//           </h2>
//         </div>
//       </aside>


//       <main className="flex-1 bg-gray-100 min-h-screen p-6 space-y-8">

//         <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           <div>
//             <h1 className="text-3xl font-extrabold">Welcome Admin 👑</h1>
//             <p className="mt-2 text-indigo-100">
//               Manage users, courses, and platform reports.
//             </p>
//           </div>
//         </div>


//         <div className="bg-white rounded-2xl shadow-lg p-6">
//           <h2 className="text-lg font-bold text-gray-800 mb-4">
//             Search & Filter Users 🔍
//           </h2>

//           <form
//             onSubmit={handleSearch}
//             className="grid grid-cols-1 md:grid-cols-4 gap-4"
//           >

//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//             />


//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//             >
//               <option value="">All Status</option>
//               <option value="1">Active</option>
//               <option value="0">Inactive</option>
//             </select>

//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//             >
//               <option value="">All Roles</option>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>


//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
//               >
//                 Search
//               </button>
             
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>


//         <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//           <h2 className="text-xl font-bold text-gray-800">Latest Users 📌</h2>

//           <div className="overflow-x-auto mt-4">
//             <table className="w-full text-sm text-left">
//               <thead className="bg-gray-100 text-gray-700">
//                 <tr>
//                   <th className="p-3">id</th>
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3">Mobile</th>
//                   <th className="p-3">City</th>
//                   <th className="p-3">Gender</th>
//                   <th className="p-3">Role</th>
//                   <th className="p-3">Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {UserList.length  > 0 ? (
//                  UserList.map((user, index) => (
//                     <tr
//                       key={user.id || index}
//                       className="border-b hover:bg-indigo-50 transition"
//                     >
//                       <td className="p-3 font-semibold">{user.id}</td>
//                       <td className="p-3">{user.name}</td>
//                       <td className="p-3">{user.email}</td>
//                       <td className="p-3">{user.mobile}</td>
//                       <td className="p-3">{user.city}</td>
//                       <td className="p-3">{user.gender}</td>
//                       <td className="p-3 font-semibold">{user.role}</td>

//                       <td className="p-3">
//                         {user.status === 1 ? (
//                           <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs">
//                             Active
//                           </span>
//                         ) : (
//                           <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs">
//                             Inactive
//                           </span>
//                         )}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan="8"
//                       className="p-4 text-center text-gray-500 font-semibold"
//                     >
//                       No Users Found ❌
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-4">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(currentPage - 1)}
//             className="bg-indigo-600 text-white px-4 py-2 rounded"
//           >
//             ⬅ Previous  
//           </button>
//                <button className="bg-indigo-300 text-white px-4 py-2 rounder"> {currentPage}</button>
//           <button
//             disabled={currentPage >= pagination.totalPages}
//             onClick={() => setCurrentPage(currentPage + 1) }
//             className="bg-indigo-600 text-white px-4 py-2 rounded"
//           >
//             Next ➡
//           </button> 
//         </div>
    
//       </main>
//     </div>
//   );
// }

// export default AdminDashboardContent;
