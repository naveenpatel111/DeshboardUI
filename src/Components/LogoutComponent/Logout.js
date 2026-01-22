import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User_API_URL } from "../../API_URL";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      const confirmLogout = window.confirm("Are you sure you want to logout?");

      if (!confirmLogout) {
        navigate(-1); // ✅ go back
        return;
      }

      try {
        // ✅ call backend logout (clear cookie)
        await axios.post(User_API_URL + "/logout", {}, { withCredentials: true });
        console.log("Logout API called ✅");
      } catch (err) {
        console.log("Logout API error ❌", err);
      }

      // ✅ clear frontend storage
      localStorage.clear();

      // ✅ redirect to login page
      navigate("/login", { replace: true });
    };

    doLogout();
  }, [navigate]);

  return null;
}

export default Logout;
