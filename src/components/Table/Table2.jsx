import { React, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./Table.css";

export default function BasicTable2() {
  const navigate = useNavigate();
 
  const navigateToAdmin3 = () => {
    navigate("/admin3"); // Replace '/admin3' with the actual route to admin3.jsx
  };


  return (
    <div className="Table">
      <h3 style={{ color: "black" }}>Confirmation Order</h3>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          style={{ color: "green", borderColor: "green" }}
          onClick={navigateToAdmin3}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}
