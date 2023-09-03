import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";
import Axios from 'axios';

const PermissionTable = () => {

  const [permissions, setPermissions] = useState([]);
  const username = "fahmi";

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:5000/salesforce/user/role/permission/list';

    // Make the GET request to your API
    Axios.post(apiUrl, {
      product_line_id: 1, // Replace with the desired product_line_id (optional)
      role_id: 1, // Replace with the desired role_id (optional)
    })
      .then((response) => {
        // Handle the successful response and set the data in state
        setPermissions(response.data.data.list);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching permissions:', error);
      });
  }, []);


  return (
    <div>
      <SideNav username={username} />

      <div className='permission-table'>
        <table>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Create</th>
              <th>Edit/Delete</th>
              <th>View</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.permission_id}>
                <td>{permission.permission_description}</td>
                <td>
                  <label className="container">
                    <input type="checkbox" />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input type="checkbox" />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input type="checkbox" />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input type="checkbox" />
                    <div className="checkmark"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionTable;
