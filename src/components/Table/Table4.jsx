import { React, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./Table.css";

export default function BasicTable2() {
  const navigate = useNavigate();
  const sendMessagetoReactNative = () => {
    const message = "password_confirm";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log("received", message);
  };

  useEffect(() => {
    const handleMessageFromWebView = event => {
      // console.log("Received message from WebView:", event);
      if (event.data === "password_confirm_AA") {
        // alert("Received message:" + JSON.stringify(event.data));
        navigate("/success");
      }
    };

    window.addEventListener("message", handleMessageFromWebView);

    // return () => {
    //   window.removeEventListener("message", handleMessageFromWebView);
    // };
  }, [navigate]);

  return (
    <div className="Table">
      <h3 style={{ color: "black" }}>Confirmation Order</h3>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          style={{ color: "green", borderColor: "green" }}
          onClick={sendMessagetoReactNative}
        >
          Confirm
        </Button>
      </Stack>
    </div>
  );
}
