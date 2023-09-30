import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import '../styles/rolelist.css'
import RoleDetails from './roleDetails';

export default function RoleList() {
  const username = 'fahmi';


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState([]);
  const [selectedRolePermission, setSelectedRolePermission] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rolePermissions'); // Replace with your actual JSON file path
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRolePermissions(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (rolePermission) => {
    setSelectedRolePermission(rolePermission);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <SideNav username={username} /> */}

      <div className="role-list">
        <h2>Role Permissions</h2>
        <table>
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Product Line</th>
              <th>Permission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rolePermissions.map((rolePermission) => (
              <tr key={rolePermission.id}>
                <td>{rolePermission.roleName}</td>
                <td>{rolePermission.productLine}</td>
                <td>
                  {/* Filter and map permissions where C (Create) is equal to 1 */}
                  {rolePermission.permissionId
                    .filter((permission) => permission.C === 1)
                    .map((permission) => (
                      <div key={permission.permission_id}>{permission.permission}</div>
                    ))}
                </td>
                <td>
                  <button className="modify-button" onClick={() => openModal(rolePermission)}>
                    View
                  </button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <RoleDetails
          rolePermission={selectedRolePermission}
          onClose={closeModal}
        />
      )}

    </div >
  );
}
