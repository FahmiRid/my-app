import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";
// import Axios from "axios";
import { fetchPermissions, storeData } from "./api/usePermissionRole";

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([]);
  const [expandedPermissions, setExpandedPermissions] = useState([]);
  const [childPermissions, setChildPermissions] = useState({}); // State for child permissions
  const username = "fahmi";

  useEffect(() => {
    // Fetch permissions using the API function
    fetchPermissions()
      .then((list) => {
        setPermissions(list);
      })
      .catch((error) => {
        console.error("Error fetching permissions:", error);
      });
  }, []);

  useEffect(() => {
    // When permissions change, update childPermissions
    const updatedChildPermissions = {};
    permissions.forEach(permission => {
      if (permission.is_parent) {
        const childIds = permissions
          .filter(
            child => child.parent_permission_id === permission.permission_id
          )
          .map(child => child.permission_id);
        updatedChildPermissions[permission.permission_id] = childIds;
      }
    });
    setChildPermissions(updatedChildPermissions);
  }, [permissions]);

  const handleDataSubmit = () => {
    // Prepare the data to send
    const dataToSend = {
      permissionId: permissions,
    };

    // Call the API function to store data
    storeData(dataToSend)
      .then((response) => {
        console.log("Data stored successfully:", response);
      })
      .catch((error) => {
        console.error("Error storing data:", error);
      });
  };

  const toggleExpand = parentId => {
    setExpandedPermissions(prevState =>
      prevState.includes(parentId)
        ? prevState.filter(id => id !== parentId)
        : [...prevState, parentId]
    );
  };

  const handlePermissionChange = (permission, type) => {
    const updatedPermissions = [...permissions];
    const updatedPermission = updatedPermissions.find(
      (p) => p.permission_id === permission.permission_id
    );
    if (updatedPermission) {
      if (type === 'UD') {
        // Toggle both 'U' and 'D' together
        updatedPermission.U = updatedPermission.U === 1 ? 0 : 1;
        updatedPermission.D = updatedPermission.D === 1 ? 0 : 1;
      } else {
        // Toggle the selected permission type (e.g., 'C', 'R', 'A')
        updatedPermission[type] = updatedPermission[type] === 1 ? 0 : 1;
      }
  
      // Toggle child permissions if they exist
      if (childPermissions[permission.permission_id]) {
        childPermissions[permission.permission_id].forEach((childId) => {
          const childPermission = updatedPermissions.find(
            (p) => p.permission_id === childId
          );
          if (childPermission) {
            if (type === 'UD') {
              childPermission.U = updatedPermission.U;
              childPermission.D = updatedPermission.D;
            } else {
              childPermission[type] = updatedPermission[type];
            }
          }
        });
      }
  
      setPermissions(updatedPermissions);
    }
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
              .filter(permission => permission.is_parent)
              .map(permission => (
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
                          ></i>
                        ) : (
                          <i
                            className="fa fa-chevron-down"
                            style={{ marginRight: "1.5rem" }}
                          ></i>
                        )}
                        {permission.permission_description}
                      </div>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.C === 1}
                          onChange={() => handlePermissionChange(permission, 'C')}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.U || permission.D === 1}
                          onChange={() => handlePermissionChange(permission, 'UD')}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.R === 1}
                          onChange={() => handlePermissionChange(permission, 'R')}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={permission.A === 1}
                          onChange={() => handlePermissionChange(permission, 'A')}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                  </tr>
                  {expandedPermissions.includes(permission.permission_id) &&
                    permissions
                      .filter(
                        child =>
                          child.parent_permission_id ===
                          permission.permission_id
                      )
                      .map(child => (
                        <tr key={child.permission_id}>
                          <td style={{ paddingLeft: "2rem" }}>
                            {child.permission_description}
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={permissions.some(
                                  p =>
                                    p.parent_permission_id ===
                                    permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.C === 1
                                )}
                                onChange={e => {
                                  const newChildCreated = e.target.checked
                                    ? 1
                                    : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach(p => {
                                    if (
                                      p.parent_permission_id ===
                                      permission.permission_id &&
                                      p.permission_id === child.permission_id
                                    ) {
                                      p.C = newChildCreated;
                                    }
                                  });
                                  setPermissions(updatedPermissions);
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={permissions.some(
                                  p =>
                                    p.parent_permission_id ===
                                    permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    (p.U || p.D) === 1
                                )}
                                onChange={e => {
                                  const newChildEdit = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach(p => {
                                    if (
                                      p.parent_permission_id ===
                                      permission.permission_id &&
                                      p.permission_id === child.permission_id
                                    ) {
                                      p.U = newChildEdit;
                                      p.D = newChildEdit;
                                    }
                                  });
                                  setPermissions(updatedPermissions);
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={permissions.some(
                                  p =>
                                    p.parent_permission_id ===
                                    permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.R === 1
                                )}
                                onChange={e => {
                                  const newChildRead = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach(p => {
                                    if (
                                      p.parent_permission_id ===
                                      permission.permission_id &&
                                      p.permission_id === child.permission_id
                                    ) {
                                      p.R = newChildRead;
                                    }
                                  });
                                  setPermissions(updatedPermissions);
                                }}
                              />
                              <div className="checkmark"></div>
                            </label>
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={permissions.some(
                                  p =>
                                    p.parent_permission_id ===
                                    permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.A === 1
                                )}
                                onChange={e => {
                                  const newChildApprove = e.target.checked
                                    ? 1
                                    : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach(p => {
                                    if (
                                      p.parent_permission_id ===
                                      permission.permission_id &&
                                      p.permission_id === child.permission_id
                                    ) {
                                      p.A = newChildApprove;
                                    }
                                  });
                                  setPermissions(updatedPermissions);
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
