import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  marginRight: '10px',
  backgroundColor: 'green',
  color: 'white',
};

function EditRoleModal({ rolePermission, onClose, onSave }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const [productLines, setProductLines] = useState([]);
  const [productLine, setProductLine] = useState('');
  const [roleName, setRoleName] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/product-lines') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setProductLines(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  useEffect(() => {
    if (rolePermission) {
      setRoleName(rolePermission.roleName);
      setProductLine(rolePermission.productLine);
    }
  }, [rolePermission]);

  const handleSave = () => {
    // Include the update API call here
    fetch('http://localhost:5000/update-role/:roleId', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roleName, productLine }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Role updated successfully:', data);
        // Optionally, you can add code to handle the API response
      })
      .catch((error) => {
        console.error('Error updating role:', error);
        // Optionally, you can add code to handle the error
      });

    handleClose(); // Close the modal after updating
  };

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <FormControl fullWidth>
            <InputLabel htmlFor="role-name"></InputLabel>
            <TextField
              id="role-name"
              label="Role Name"
              variant="outlined"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel htmlFor="product-line">Product Line</InputLabel>
            <Select
              id="product-line"
              value={productLine}
              onChange={(e) => setProductLine(e.target.value)}
              label="Product Line"
            >
              <MenuItem value="">Select a Product Line</MenuItem>
              {productLines.map((product) => (
                <MenuItem key={product.id} value={product.name}>
                  {product.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            style={{ ...buttonStyle, marginTop: '20px' }}
            onClick={handleSave}
          >
            Save
          </Button>

          <Button
            style={{ ...buttonStyle, backgroundColor: 'red', marginTop: '20px' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EditRoleModal;
