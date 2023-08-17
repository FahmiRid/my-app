import { React, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./Table.css";

export default function BasicTable2() {
  const sendMessagetoSuccessful = () => {
    const message = "done";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log("received", message);
  };

  return (
    <div className="Table">
      <h3 style={{ color: "black" }}>Successful !</h3>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          style={{ color: "green", borderColor: "green" }}
          onClick={sendMessagetoSuccessful}
        >
          Done
        </Button>
      </Stack>
    </div>
  );
}
