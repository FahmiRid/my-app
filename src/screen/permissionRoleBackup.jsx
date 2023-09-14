import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";
import Axios from "axios";

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([]);
  const [expandedPermissions, setExpandedPermissions] = useState([]);
  const [childPermissions, setChildPermissions] = useState({}); // State for child permissions
  const username = "fahmi";

  useEffect(() => {
    const apiUrl = "http://localhost:5000/salesforce/user/role/permission/list";

    Axios.post(apiUrl, {
      product_line_id: 1,
      role_id: 1,
    })
      .then((response) => {
        setPermissions(response.data.data.list);
      })
      .catch((error) => {
        console.error("Error fetching permissions:", error);
      });
  }, []);

  const handleDataSubmit = () => {
    const apiUrl = "http://localhost:5000/api/storeData";

    // Merge parent and child permissions with the same permission_id
    const combinedPermissions = permissions.map((permission) => {
      const childPermissionWithSameID = permissions.find(
        (p) =>
          p.parent_permission_id === permission.permission_id &&
          p.permission_id === permission.permission_id
      );

      if (childPermissionWithSameID) {
        return {
          ...permission,
          ...childPermissionWithSameID,
        };
      }

      return permission;
    });

    const dataToSend = {
      permissionId: combinedPermissions,
    };

    Axios.post(apiUrl, dataToSend)
      .then((response) => {
        console.log("Data stored successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error storing data:", error);
      });
  };

  const toggleExpand = (parentId) => {
    setExpandedPermissions((prevState) =>
      prevState.includes(parentId)
        ? prevState.filter((id) => id !== parentId)
        : [...prevState, parentId]
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
              .filter((permission) => permission.is_parent)
              .map((permission) => (
                <React.Fragment key={permission.permission_id}>
                  <tr>
                    <td>
                      <div onClick={() => toggleExpand(permission.permission_id)}>
                        {expandedPermissions.includes(permission.permission_id) ? (
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
                          onChange={(e) => {
                            const newCreated = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions];
                            const updatedPermission = updatedPermissions.find(
                              (p) => p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.C = newCreated;
                              setPermissions(updatedPermissions);
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
                          checked={permission.U || permission.D === 1}
                          onChange={(e) => {
                            const newEdit = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions];
                            updatedPermissions.forEach((p) => {
                              if (p.parent_permission_id === permission.permission_id) {
                                p.U = newEdit;
                                p.D = newEdit;
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
                          checked={permission.R === 1}
                          onChange={(e) => {
                            const newRead = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions];
                            const updatedPermission = updatedPermissions.find(
                              (p) => p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.R = newRead;
                              setPermissions(updatedPermissions);
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
                          checked={permission.A === 1}
                          onChange={(e) => {
                            const newApprove = e.target.checked ? 1 : 0;
                            const updatedPermissions = [...permissions];
                            const updatedPermission = updatedPermissions.find(
                              (p) => p.permission_id === permission.permission_id
                            );
                            if (updatedPermission) {
                              updatedPermission.A = newApprove;
                              setPermissions(updatedPermissions);
                            }
                          }}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                  </tr>
                  {expandedPermissions.includes(permission.permission_id) &&
                    permissions
                      .filter(
                        (child) =>
                          child.parent_permission_id === permission.permission_id
                      )
                      .map((child) => (
                        <tr key={child.permission_id}>
                          <td style={{ paddingLeft: "2rem" }}>
                            {child.permission_description}
                          </td>
                          <td>
                            <label className="container">
                              <input
                                type="checkbox"
                                checked={permissions.some(
                                  (p) =>
                                    p.parent_permission_id === permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.C === 1
                                )}
                                onChange={(e) => {
                                  const newChildCreated = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach((p) => {
                                    if (
                                      p.parent_permission_id === permission.permission_id &&
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
                                  (p) =>
                                    p.parent_permission_id === permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    (p.U || p.D) === 1
                                )}
                                onChange={(e) => {
                                  const newChildEdit = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach((p) => {
                                    if (
                                      p.parent_permission_id === permission.permission_id &&
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
                                  (p) =>
                                    p.parent_permission_id === permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.R === 1
                                )}
                                onChange={(e) => {
                                  const newChildRead = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach((p) => {
                                    if (
                                      p.parent_permission_id === permission.permission_id &&
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
                                  (p) =>
                                    p.parent_permission_id === permission.permission_id &&
                                    p.permission_id === child.permission_id &&
                                    p.A === 1
                                )}
                                onChange={(e) => {
                                  const newChildApprove = e.target.checked ? 1 : 0;
                                  const updatedPermissions = [...permissions];
                                  updatedPermissions.forEach((p) => {
                                    if (
                                      p.parent_permission_id === permission.permission_id &&
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
