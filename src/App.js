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
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const username = "Fahmi";
  const isAdmin = localStorage.getItem('admin');
  const isAllowed = username === "Fahmi" && isAdmin;

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* {isAllowed && (
         
        )} */}
        <Route path="/permissionRole" element={<PermissionTable />} />
        <Route path="/staffPage" element={<StaffPage />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/addRole" element={<Role />} />
        <Route path="/register" element={<Register />} />
        <Route path="/SideNav2" element={<SideNav2 />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
