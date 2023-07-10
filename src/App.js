import "./App.css";
import PermissionTable from "./screen/permissionRole";
import Login from "./screen/Login";
import StaffPage from "./screen/staffPage";
import UserList from "./screen/userList";
import Home from "./screen/home";
import Role from "./screen/addRole";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const username = "Fahmi";
  const isAdmin = localStorage.getItem('admin') === 'staff';
  const isAllowed = username === "Fahmi" && isAdmin;

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {isAllowed && (
          <Route path="/permissionRole" element={<PermissionTable />} />
        )}
        <Route path="/staffPage" element={<StaffPage />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/addRole" element={<Role />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
