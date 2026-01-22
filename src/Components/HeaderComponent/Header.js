import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import UserHeader from "./UserHeader";
import VisitorHeader from "./VisiterHeader";
import AdminHeader from "./AdminHeader";
import { User_API_URL } from "../../API_URL";

function Header() {
  const [user, setUser] = useState(null);
  const location = useLocation(); // ✅ detect route changes

  const fetchUser = async () => {
    try {
      const res = await axios.get(User_API_URL + "/me", {
        withCredentials: true,
      });

      if (res.data.status === true) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    }
  };

  // ✅ Fetch user whenever route changes (login/logout/dashboard navigation)
  useEffect(() => {
    fetchUser();
  }, [location.pathname]);

  // ✅ Render based on role
  if (user?.role === "admin") return <AdminHeader />;
  if (user?.role === "user") return <UserHeader />;
  return <VisitorHeader />;
}

export default Header;
