import React, { useState } from 'react';
import '../styles/PermissionTable.css';
import SideNav from './SideNav';
const PermissionTable = () => {
  const [permissions, setPermissions] = useState({
    admin: {
      create: false,
      read: false,
      edit: false,
      delete: false,
      activate: false,
      reactivate: false,
      deactivate: false,
      approve: false,
      
    },
    editor: {
      create: false,
      read: false,
      edit: false,
      delete: false,
      activate: false,
      reactivate: false,
      deactivate: false,
      approve: false,
    },
    viewer: {
      create: false,
      read: false,
      edit: false,
      delete: false,
      activate: false,
      reactivate: false,
      deactivate: false,
      approve: false,
    },
  });

  const username = 'fahmi';

  // Handle checkbox change
  const handleCheckboxChange = (role, permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [role]: {
        ...prevPermissions[role],
        [permission]: !prevPermissions[role][permission],
      },
    }));
  };

  // Render the table view and checkboxes
  return (
    <div>
        <SideNav username={username}/>

    <table className="permission-table">
      <thead>
        <tr>
          <th>Role</th>
          <th>Create</th>
          <th>Read</th>
          <th>Edit</th>     
          <th>Delete</th>
          <th>Activate</th>
          <th>Reactivate</th>
          <th>Deactivate</th>
          <th>Approve</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(permissions).map((role) => (
          <tr key={role}>
            <td>{role}</td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].create}
                onChange={() => handleCheckboxChange(role, 'create')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].read}
                onChange={() => handleCheckboxChange(role, 'read')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].edit}
                onChange={() => handleCheckboxChange(role, 'edit')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].delete}
                onChange={() => handleCheckboxChange(role, 'delete')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].activate}
                onChange={() => handleCheckboxChange(role, 'activate')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].reactivate}
                onChange={() => handleCheckboxChange(role, 'reactivate')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].deactivate}
                onChange={() => handleCheckboxChange(role, 'deactivate')}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={permissions[role].approve}
                onChange={() => handleCheckboxChange(role, 'approve')}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default PermissionTable;
