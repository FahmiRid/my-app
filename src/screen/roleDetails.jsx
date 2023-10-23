import React from 'react';
import handlePermissionChange from "./functions/handlePermissionChange";
// import "../styles/roleDetails.css";

export default function roleDetails({ rolePermission, onClose }) {
    const permissions = rolePermission.permissionId;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Role Permission Details</h2>
        <p>Role Name: {rolePermission.roleName}</p>
        <p>Product Line: {rolePermission.productLine}</p>
        <p>Permissions:</p>
        <ul>
          {rolePermission.permissionId.map((permission) => (
            <li key={permission.permission_id}>{permission.permission}</li>
          ))}
        </ul>
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
                      checked={permission.U === 1 || permission.D === 1}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
