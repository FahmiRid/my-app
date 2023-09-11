import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";
import Axios from "axios";

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([]);
  const [expandedPermissions, setExpandedPermissions] = useState([]); // To track expanded parent permissions
  const [childPermissions, setChildPermissions] = useState({}); // Separate state for child permissions
  const username = "fahmi";

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/salesforce/user/role/permission/list";

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
        console.error("Error fetching permissions:", error);
      });
  }, []);

  const handleDataSubmit = () => {
    // Define the API URL for the backend endpoint you created
    const apiUrl = "http://localhost:5000/api/storeData";

    // Merge parent and child permissions into a single array
    const combinedPermissions = [
      ...permissions, // Parent permissions
      ...Object.values(childPermissions).map((childPermission) => ({
        ...childPermission,
      })), // Child permissions
    ];

    // Data to send to the backend API
    const dataToSend = {
      permissionId: combinedPermissions,
    };

    // Make a POST request to the backend API
    Axios.post(apiUrl, dataToSend)
      .then((response) => {
        // Handle the successful response if needed
        console.log("Data stored successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error storing data:", error);
      });
  };

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

      <div className="permission-table">
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
                      <div
                        onClick={() => toggleExpand(permission.permission_id)}
                      >
                        {expandedPermissions.includes(
                          permission.permission_id
                        ) ? (
                          <i
                            className="fa fa-chevron-up"
                            style={{ marginRight: "1.5rem" }}
                          ></i> // Add spacing here
                        ) : (
                          <i
                            className="fa fa-chevron-down"
                            style={{ marginRight: "1.5rem" }}
                          ></i> // Add spacing here
                        )}
                        {permission.permission_description}
                      </div>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.C === 1} // Check if C is 1 to set the checkbox as checked
                          onChange={(e) => {
                            const newCreated = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions]; // Create a copy of permissions
                            // Find the permission to update by permission_id
                            const updatedPermission = updatedPermissions.find(
                              (p) =>
                                p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.C = newCreated; // Update the "C" value
                              setPermissions(updatedPermissions); // Update the state with the new permissions
                            }
                          }}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={
                            permission.U === 1 || permission.D === 1
                          } // Check if U or D is 1 to set the checkbox as checked
                          onChange={(e) => {
                            const newEdit = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions]; // Create a copy of permissions
                            // Find the permission to update by permission_id
                            const updatedPermission = updatedPermissions.find(
                              (p) =>
                                p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.U = newEdit; // Update the "U" value
                              updatedPermission.D = newEdit; // Update the "D" value
                              setPermissions(updatedPermissions); // Update the state with the new permissions
                            }
                          }}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.R === 1} // Check if R is 1 to set the checkbox as checked
                          onChange={(e) => {
                            const newRead = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions]; // Create a copy of permissions
                            // Find the permission to update by permission_id
                            const updatedPermission = updatedPermissions.find(
                              (p) =>
                                p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.R = newRead; // Update the "R" value
                              setPermissions(updatedPermissions); // Update the state with the new permissions
                            }
                          }}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.A === 1} // Check if A is 1 to set the checkbox as checked
                          onChange={(e) => {
                            const newApprove = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions]; // Create a copy of permissions
                            // Find the permission to update by permission_id
                            const updatedPermission = updatedPermissions.find(
                              (p) =>
                                p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.A = newApprove; // Update the "A" value
                              setPermissions(updatedPermissions); // Update the state with the new permissions
                            }
                          }}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                  </tr>
                  {expandedPermissions.includes(permission.permission_id) &&
                    // Render child permissions if expanded
                    permissions
                      .filter(
                        (child) =>
                          child.parent_permission_id ===
                          permission.permission_id
                      )
                      .map((child) => (
                        <tr key={child.permission_id}>
                          <td style={{ paddingLeft: "2rem" }}>
                            {child.permission_description}
                          </td>{" "}
                          {/* Add left padding here */}
                          <td>
                          <label className="container">
                            <input
                              type="checkbox"
                              checked={childPermissions[child.permission_id]?.C === 1} // Check if C is 1 to set the checkbox as checked
                              onChange={(e) => {
                                const newChildCreated = e.target.checked ? 1 : 0;
                                const updatedChildPermissions = { ...childPermissions };
                                updatedChildPermissions[child.permission_id] = {
                                  ...updatedChildPermissions[child.permission_id],
                                  C: newChildCreated,
                                };
                                // Update the corresponding parent permission as well
                                const parentPermissionId = child.parent_permission_id;
                                if (parentPermissionId) {
                                  const parentPermission = updatedChildPermissions[parentPermissionId];
                                  if (parentPermission) {
                                    parentPermission.C = newChildCreated;
                                  }
                                }
                                setChildPermissions(updatedChildPermissions);
                              }}
                            />
                            <div className="checkmark"></div>
                          </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={
                                  childPermissions[child.permission_id]?.U ===
                                    1 ||
                                  childPermissions[child.permission_id]?.D ===
                                    1
                                } // Check if U or D is 1 to set the checkbox as checked
                                onChange={(e) => {
                                  const newChildEdit = e.target.checked
                                    ? 1
                                    : 0;
                                  setChildPermissions((prev) => ({
                                    ...prev,
                                    [child.permission_id]: {
                                      ...prev[child.permission_id],
                                      U: newChildEdit,
                                      D: newChildEdit,
                                    },
                                  }));
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={
                                  childPermissions[child.permission_id]?.R ===
                                  1
                                } // Check if R is 1 to set the checkbox as checked
                                onChange={(e) => {
                                  const newChildRead = e.target.checked
                                    ? 1
                                    : 0;
                                  setChildPermissions((prev) => ({
                                    ...prev,
                                    [child.permission_id]: {
                                      ...prev[child.permission_id],
                                      R: newChildRead,
                                    },
                                  }));
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={
                                  childPermissions[child.permission_id]?.A ===
                                  1
                                } // Check if A is 1 to set the checkbox as checked
                                onChange={(e) => {
                                  const newChildApprove = e.target.checked
                                    ? 1
                                    : 0;
                                  setChildPermissions((prev) => ({
                                    ...prev,
                                    [child.permission_id]: {
                                      ...prev[child.permission_id],
                                      A: newChildApprove,
                                    },
                                  }));
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                        </tr>
                      ))}
                </React.Fragment>
              ))}
          </tbody>
        </table>
        <div>
          <button onClick={handleDataSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PermissionTable;
