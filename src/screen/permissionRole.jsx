import React, { useState, useEffect } from "react";
import "../styles/PermissionTable.css";
import SideNav from "./SideNav";

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([]);

  const username = "fahmi";

  const handleCheckboxChange = (permission, action) => {
    const updatedPermissions = permissions.map((perm) => {
      if (perm.permission_id === permission.permission_id) {
        return {
          ...perm,
          [action]: perm[action] === 1 ? 0 : 1,
        };
      }
      return perm;
    });
    setPermissions(updatedPermissions);
  };

  useEffect(() => {
    const fetchPermissionRoles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/permissions/list");
        const data = await response.json();
        if (data && data.permissions) {
          // Initialize permissions with default values of 0
          const initializedPermissions = data.permissions.map((permission) => ({
            ...permission,
            C: 0,
            R: 0,
            U: 0,
            D: 0,
            ...(permission.sub_permissions && {
              sub_permissions: permission.sub_permissions.map((subPermission) => ({
                ...subPermission,
                C: 0,
                R: 0,
                U: 0,
                D: 0,
              })),
            }),
          }));
          setPermissions(initializedPermissions);
        }
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };
    fetchPermissionRoles();
  }, []);

  return (
    <div>
      <SideNav username={username} />

      <table className="permission-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub-Category</th>
            <th>Create</th>
            <th>Read</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <React.Fragment key={permission.permission_id}>
              <tr>
                <td>{permission.permission_name}</td>
                <td></td> {/* Placeholder for sub-category */}
                <td>
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={permission.C === 1}
                      onChange={() => handleCheckboxChange(permission, "C")}
                    />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={permission.R === 1}
                      onChange={() => handleCheckboxChange(permission, "R")}
                    />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={permission.U === 1}
                      onChange={() => handleCheckboxChange(permission, "U")}
                    />
                    <div className="checkmark"></div>
                  </label>
                </td>
                <td>
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={permission.D === 1}
                      onChange={() => handleCheckboxChange(permission, "D")}
                    />
                    <div className="checkmark"></div>
                  </label>
                </td>
              </tr>
              {permission.sub_permissions &&
                permission.sub_permissions.map((subPermission) => (
                  <tr key={subPermission.permission_id}>
                    <td></td> {/* Placeholder for main category */}
                    <td>{subPermission.permission_name}</td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={subPermission.C === 1}
                          onChange={() => handleCheckboxChange(subPermission, "C")}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={subPermission.R === 1}
                          onChange={() => handleCheckboxChange(subPermission, "R")}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={subPermission.U === 1}
                          onChange={() => handleCheckboxChange(subPermission, "U")}
                        />
                        <div className="checkmark"></div>
                      </label>
                    </td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          checked={subPermission.D === 1}
                          onChange={() => handleCheckboxChange(subPermission, "D")}
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
    </div>
  );
};

export default PermissionTable;
