import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";
import Axios from 'axios';

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([]);
  const [expandedPermissions, setExpandedPermissions] = useState([]); // To track expanded parent permissions
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

  // Function to toggle the display of child permissions for a parent
  const toggleExpand = (parentId) => {
    setExpandedPermissions((prevState) =>
      prevState.includes(parentId)
        ? prevState.filter((id) => id !== parentId) // Hide child permissions
        : [...prevState, parentId] // Show child permissions
    );
  };

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
            {permissions
              .filter((permission) => permission.is_parent) // Only display parent permissions
              .map((permission) => (
                <React.Fragment key={permission.permission_id}>
                  <tr>
                    <td>
                      <div onClick={() => toggleExpand(permission.permission_id)}>
                        {expandedPermissions.includes(permission.permission_id) ? (
                          <i className="fa fa-chevron-up" style={{ marginRight: '1.5rem' }}></i> // Add spacing here
                        ) : (
                          <i className="fa fa-chevron-down" style={{ marginRight: '1.5rem' }}></i> // Add spacing here
                        )}
                        {permission.permission_description}
                      </div>
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
                    <td>
                      <label className="container">
                        <input type="checkbox" />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                  </tr>
                  {expandedPermissions.includes(permission.permission_id) && (
                    // Render child permissions if expanded
                    permissions
                      .filter((child) => child.parent_permission_id === permission.permission_id)
                      .map((child) => (
                        <tr key={child.permission_id}>
                          <td style={{ paddingLeft: '2rem' }}>{child.permission_description}</td> {/* Add left padding here */}
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
                      ))
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionTable;
