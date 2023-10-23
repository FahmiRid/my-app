// import Sidebar from "./components/Sidebar";
// import MainDash from "./components/MainDash/MainDash";
// import RightSide from "./components/RigtSide/RightSide";
import "./App.css";
import PermissionTable from "./screen/permissionRole";
import Login from "./screen/Login";
import StaffPage from "./screen/staffPage";
import UserList from "./screen/userList";
import Home from "./screen/home";
import Role from "./screen/addRole";
import Register from "./screen/register";
import SideNav2 from "./screen/SideNav2";
import Content from "./screen/content";
import Admin from "./screen/Admin";
import Admin2 from "./screen/Admin2";
import Admin3 from "./screen/Admin3";
import Admin4 from "./screen/Admin4";
import Success from "./screen/successfull";
import RoleList from "./screen/roleList";
import RoleDetails from "./screen/roleDetails";
import EditRoleModal from "./screen/EditRoleModal";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const username = "Fahmi";
  const isAdmin = localStorage.getItem("admin");
  const isAllowed = username === "Fahmi" && isAdmin;

  return (
    <div>
      <div>
        {/* <Sidebar />
          <MainDash />
          <RightSide /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* {isAllowed && (  
        )} */}
            <Route path="/permissionRole" element={<PermissionTable />} />
            <Route path="/login" element={<Login />} />
            <Route path="/staffPage" element={<StaffPage />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/RoleList" element={<RoleList />} />
            <Route path="/addRole" element={<Role />} />
            <Route path="/roleDetails" element={<RoleDetails />} />
            <Route path="/roleEdit" element={<EditRoleModal />} />
            <Route path="/register" element={<Register />} />
            <Route path="/SideNav2" element={<SideNav2 />} />
            <Route path="/content" element={<Content />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin2" element={<Admin2 />} />
            <Route path="/admin3" element={<Admin3 />} />
            <Route path="/admin4" element={<Admin4 />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
