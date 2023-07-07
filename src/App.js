import "./App.css";
import PermissionTable from "./screen/permissionRole";
import Login from "./screen/Login";
import StaffPage from "./screen/staffPage";
import UserList from "./screen/userList";
import Home from "./screen/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  localStorage.setItem ('admin', 'staff')
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/permissionRole" element={<PermissionTable />} />
      <Route path="/staffPage" element={<StaffPage />} />
      <Route path="/userList" element={<UserList />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
