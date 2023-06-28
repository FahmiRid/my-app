import React, { useState } from 'react';

const UserRoles = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' },
  ];

  const handleRoleSelection = (roleId) => {
    if (selectedRoles.includes(roleId)) {
      setSelectedRoles(selectedRoles.filter((id) => id !== roleId));
    } else {
      setSelectedRoles([...selectedRoles, roleId]);
    }
  };

  return (
    <div>
      <h2>User Role Assignment</h2>
      <h3>Available Roles</h3>
      {roles.map((role) => (
        <div key={role.id}>
          <label>
            <input
              type="checkbox"   
              checked={selectedRoles.includes(role.id)}
              onChange={() => handleRoleSelection(role.id)}
            />
            {role.name}
          </label>
        </div>
      ))}
      <h3>Selected Roles</h3>
      {selectedRoles.length > 0 ? (
        <ul>
          {selectedRoles.map((roleId) => {
            const role = roles.find((r) => r.id === roleId);
            return <li key={roleId}>{role.name}</li>;
          })}
        </ul>
      ) : (
        <p>No roles selected.</p>
      )}
    </div>
  );
};

export default UserRoles;
