// permissionUtils.js

const handlePermissionChange = (permissions, childPermissions, permission, type, setPermissions) => {
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
      console.log('Check!', updatedPermission)
      setPermissions(updatedPermissions);
    }
  };
  
  export default handlePermissionChange;
  