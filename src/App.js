
import Register from "./Components/RegisterComponent/Register";
import { Route,  Routes } from "react-router-dom";
import Login from "./Components/LoginComponent/Login";
import VisitorContent from "./Components/HomeContentComponent/VisiterHomeContent";
import CommonFooter from "./Components/FooterComponent/Footer";
import AdminDashboardContent from "./Components/HomeContentComponent/AdminDeshboard";
import Header from "./Components/HeaderComponent/Header";
import Logout from "./Components/LogoutComponent/Logout";
import UserDashboardContent from "./Components/HomeContentComponent/UserDeshboard";


function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={  <VisitorContent/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/userDashboard" element={<UserDashboardContent/>}></Route>
        <Route path="/adminDashboard" element={<AdminDashboardContent/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>

      </Routes>
     <CommonFooter/>
    </>
  );
}

export default App;

