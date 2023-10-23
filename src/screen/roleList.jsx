import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import '../styles/rolelist.css'
import RoleDetails from './roleDetails';
import EditRoleModal from './EditRoleModal';
export default function RoleList() {
  const username = 'fahmi';


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState([]);
  const [selectedRolePermission, setSelectedRolePermission] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditRolePermission, setSelectedEditRolePermission] = useState(null);


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

  const openEditModal = (rolePermission) => {
    setSelectedEditRolePermission(rolePermission);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEditModal = () => {
    // Implement the logic to save changes made in the Edit modal
    // This may involve making API requests or updating state.
    // After saving, you can close the modal.
    closeEditModal();
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
                  <button className="delete-button">Delete</button>
                  <button className="edit-button" onClick={() => openEditModal(rolePermission)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <div>
          {isEditModalOpen && (
            <EditRoleModal
              rolePermission={selectedEditRolePermission}
              onClose={closeEditModal}
              onSave={saveEditModal}

            />
          )}
        </div>
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
